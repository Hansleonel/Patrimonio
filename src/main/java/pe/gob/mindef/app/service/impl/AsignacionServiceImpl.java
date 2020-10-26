package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.Asignacion;
import pe.gob.mindef.app.domain.Bien;
import pe.gob.mindef.app.repository.AsignacionRepository;
import pe.gob.mindef.app.repository.BienRepository;
import pe.gob.mindef.app.security.SecurityUtils;
import pe.gob.mindef.app.service.AsignacionService;
import pe.gob.mindef.app.service.BienService;

import java.util.Optional;
import java.text.SimpleDateFormat;
import java.util.Date;
/**
 * Service Implementation for managing Invitado.
 */
@Service
@Transactional
public class AsignacionServiceImpl implements AsignacionService {

    private final Logger log = LoggerFactory.getLogger(AsignacionServiceImpl.class);

    private final AsignacionRepository asignacionRepository;

    public AsignacionServiceImpl(AsignacionRepository asignacionRepository) {
        this.asignacionRepository = asignacionRepository;
    }

    /**
     * Save a office.
     *
     * @param asignacion the entity to save
     * @return the persisted entity
     */
    @Override
    public Asignacion save(Asignacion asignacion) {
        SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
        asignacion.setPatrimonio_aprobacion(SecurityUtils.getCurrentUserLogin().get());
        asignacion.setFecha_asignacion(sdf.format(new Date()));
        asignacion.setEstado_asignacion("APROBADO");
        log.debug("Request to save asignacion : {}", asignacion);
        return asignacionRepository.save(asignacion);
    }

    /**
     * Get all the asignacion.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Asignacion> findAll(Pageable pageable) {
        log.debug("Request to get all Asignacion");
        return asignacionRepository.findAll(pageable);
    }

    /**
     * Get one office by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Asignacion> findOne(Long id) {
        log.debug("Request to get Asignacion : {}", id);
        return asignacionRepository.findById(id);
    }

    /**
     * Delete the asignacion by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Asginacion : {}", id);
        asignacionRepository.deleteById(id);
    }
}
