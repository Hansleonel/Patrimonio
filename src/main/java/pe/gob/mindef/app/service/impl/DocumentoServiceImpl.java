package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.DetalleDocumento;
import pe.gob.mindef.app.domain.Documento;
import pe.gob.mindef.app.repository.DetalleDocumentoRepository;
import pe.gob.mindef.app.repository.DocumentoRepository;
import pe.gob.mindef.app.service.DocumentoService;

import java.util.Optional;
import java.util.Set;

/**
 * Service Implementation for managing Documento.
 */
@Service
@Transactional
public class DocumentoServiceImpl implements DocumentoService {

    private final Logger log = LoggerFactory.getLogger(DocumentoServiceImpl.class);

    private final DocumentoRepository documentoRepository;
    private final DetalleDocumentoRepository detalleDocumentoRepository;

    public DocumentoServiceImpl(DocumentoRepository documentoRepository, DetalleDocumentoRepository detalleDocumentoRepository) {
        this.documentoRepository = documentoRepository;
        this.detalleDocumentoRepository = detalleDocumentoRepository;
    }

    /**
     * Save a documento.
     *
     * @param documento the entity to save
     * @return the persisted entity
     */
    @Override
    public Documento save(Documento documento) {
        log.debug("Request to save documento : {}", documento);
        Set<DetalleDocumento> detalleDocumentos = documento.getDetalleDocumentos();
        documento.setDetalleDocumentos(null);
        documentoRepository.save(documento);

        for (DetalleDocumento detalleDocumento : detalleDocumentos) {
//            Documento d = new Documento();
//            d.setIdDocumento(documento.getIdDocumento());
            detalleDocumento.setDocumento(documento);
            detalleDocumentoRepository.save(detalleDocumento);
        }
        documento.setDetalleDocumentos(detalleDocumentos);

        return documentoRepository.save(documento);
    }

    /**
     * Get all the documento.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Documento> findAll(Pageable pageable) {
        log.debug("Request to get all Documento");
        return documentoRepository.findAll(pageable);
    }

    /**
     * Get one documento by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Documento> findOne(Long id) {
        log.debug("Request to get Documento : {}", id);
        return documentoRepository.findById(id);
    }

    /**
     * Delete the documento by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Documento : {}", id);
        documentoRepository.deleteById(id);
    }
}
