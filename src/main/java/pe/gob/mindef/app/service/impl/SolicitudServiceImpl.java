package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.Solicitud;
import pe.gob.mindef.app.repository.SolicitudRepository;
import pe.gob.mindef.app.service.SolicitudService;

import java.util.Optional;

/**
 * Service Implementation for managing Solicitud.
 */
@Service
@Transactional
public class SolicitudServiceImpl implements SolicitudService {

    private final Logger log = LoggerFactory.getLogger(SolicitudServiceImpl.class);

    private final SolicitudRepository solicitudRepository;

    public SolicitudServiceImpl(SolicitudRepository solicitudRepository) {
        this.solicitudRepository = solicitudRepository;
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
