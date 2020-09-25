package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.*;
import pe.gob.mindef.app.repository.DetalleDocumentoRepository;
import pe.gob.mindef.app.repository.DocumentoRepository;
import pe.gob.mindef.app.repository.SolicitudRepository;
import pe.gob.mindef.app.service.SolicitudService;

import java.util.Date;
import java.util.List;
import java.util.Optional;

/**
 * Service Implementation for managing Solicitud.
 */
@Service
@Transactional
public class SolicitudServiceImpl implements SolicitudService {

    private final Logger log = LoggerFactory.getLogger(SolicitudServiceImpl.class);

    private final SolicitudRepository solicitudRepository;
    private final DocumentoRepository documentoRepository;
    private final DetalleDocumentoRepository detalleDocumentoRepository;

    public SolicitudServiceImpl(SolicitudRepository solicitudRepository, DocumentoRepository documentoRepository, DetalleDocumentoRepository detalleDocumentoRepository) {
        this.solicitudRepository = solicitudRepository;
        this.documentoRepository = documentoRepository;
        this.detalleDocumentoRepository = detalleDocumentoRepository;

    }

    /**
     * Save a solicitud.
     *
     * @param solicitud the entity to save
     * @return the persisted entity
     */
    @Override
    public Solicitud save(Solicitud solicitud) {
        log.debug("Request to save solicitud : {}", solicitud);
        return solicitudRepository.save(solicitud);
    }

    @Override
    public Solicitud saveDesplazamiento(Solicitud solicitud, List<Long> codigosBien) {
        log.debug("Request to save desplazamiento : {}", solicitud);

        // 1 Pendiente 2 Revisado 3 AProbado 4 Rechazado 5 Finalizado
        solicitud.setEstado(1);
        Proceso proceso = new Proceso();
        // 1 Asignacion 2 Desplazamiento
        proceso.setId_proceso(2L);
        solicitud.setProceso(proceso);
        // 1 Interno 2 Externo
        solicitud.setTipo(2);

        solicitudRepository.save(solicitud);
        Documento documento = new Documento();
        documento.setFechaDocumento(new Date());
        documento.setProceso(proceso);
        documento.setEstadoDocumento(1);
        documento.setSolicitud(solicitud);

        documentoRepository.save(documento);

        for (Long c : codigosBien
        ) {
            DetalleDocumento detalleDocumento = new DetalleDocumento();
            detalleDocumento.setDocumento(documento);
            detalleDocumento.setBien(new Bien(c));
            detalleDocumentoRepository.save(detalleDocumento);
        }

        return solicitud;
    }


    /**
     * Get all the solicitud.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Solicitud> findAll(Pageable pageable) {
        log.debug("Request to get all Solicitud");
        return solicitudRepository.findAll(pageable);
    }

    @Override
    public Page<Solicitud> getSolicitudByUser(Pageable pageable, String dni) {
        //List<Invitado> list = invitadoRepository.getOrderInvitado();
        return solicitudRepository.getSolicitudByUser(pageable, dni);
    }

    /**
     * Get one solicitud by id.
     *
     * @param id the id of the entity
     * @return the entity
     */

    @Override
    @Transactional(readOnly = true)
    public Optional<Solicitud> findOne(Long id) {
        log.debug("Request to get Solicitud : {}", id);
        return solicitudRepository.findById(id);
    }

    /**
     * Delete the solicitud by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Solicitud : {}", id);
        solicitudRepository.deleteById(id);
    }
}
