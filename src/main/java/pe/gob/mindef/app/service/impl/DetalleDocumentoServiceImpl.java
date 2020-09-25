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
import pe.gob.mindef.app.service.DetalleDocumentoService;
import pe.gob.mindef.app.service.DocumentoService;

import java.util.Optional;

/**
 * Service Implementation for managing DetalleDocumento.
 */
@Service
@Transactional
public class DetalleDocumentoServiceImpl implements DetalleDocumentoService {

    private final Logger log = LoggerFactory.getLogger(DetalleDocumentoServiceImpl.class);

    private final DetalleDocumentoRepository detalleDocumentoRepository;

    public DetalleDocumentoServiceImpl(DetalleDocumentoRepository detalleDocumentoRepository) {
        this.detalleDocumentoRepository = detalleDocumentoRepository;
    }

    /**
     * Save a detalleDocumentoRepository.
     *
     * @param detalleDocumento the entity to save
     * @return the persisted entity
     */
    @Override
    public DetalleDocumento save(DetalleDocumento detalleDocumento) {
        log.debug("Request to save DetalleDocumentoRepository : {}", detalleDocumento);
        return detalleDocumentoRepository.save(detalleDocumento);
    }

    /**
     * Get all the detalleDocumentoRepository.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<DetalleDocumento> findAll(Pageable pageable) {
        log.debug("Request to get all DetalleDocumento");
        return detalleDocumentoRepository.findAll(pageable);
    }

    /**
     * Get one detalleDocumentoRepository by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<DetalleDocumento> findOne(Long id) {
        log.debug("Request to get DetalleDocumentoRepository : {}", id);
        return detalleDocumentoRepository.findById(id);
    }

    /**
     * Delete the detalleDocumentoRepository by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete DetalleDocumentoRepository : {}", id);
        detalleDocumentoRepository.deleteById(id);
    }
}
