package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.Proceso;
import pe.gob.mindef.app.repository.ProcesoRepository;
import pe.gob.mindef.app.service.ProcesoService;

import java.util.Optional;

/**
 * Service Implementation for managing Invitado.
 */
@Service
@Transactional
public class ProcesoServiceImpl implements ProcesoService {

    private final Logger log = LoggerFactory.getLogger(ProcesoServiceImpl.class);

    private final ProcesoRepository procesoRepository;

    public ProcesoServiceImpl(ProcesoRepository procesoRepository) {
        this.procesoRepository = procesoRepository;
    }

    /**
     * Save a office.
     *
     * @param proceso the entity to save
     * @return the persisted entity
     */
    @Override
    public Proceso save(Proceso proceso) {
        log.debug("Request to save proceso : {}", proceso);
        return procesoRepository.save(proceso);
    }

    /**
     * Get all the proceso.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Proceso> findAll(Pageable pageable) {
        log.debug("Request to get all Proceso");
        return procesoRepository.findAll(pageable);
    }

    /**
     * Get one proceso by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Proceso> findOne(Long id) {
        log.debug("Request to get Proceso : {}", id);
        return procesoRepository.findById(id);
    }

    /**
     * Delete the proceso by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Proceso : {}", id);
        procesoRepository.deleteById(id);
    }
}
