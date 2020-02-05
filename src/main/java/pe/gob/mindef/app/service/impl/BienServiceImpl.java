package pe.gob.mindef.app.service.impl;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import pe.gob.mindef.app.domain.Bien;
import pe.gob.mindef.app.repository.BienRepository;
import pe.gob.mindef.app.service.BienService;

import java.util.Optional;

/**
 * Service Implementation for managing Invitado.
 */
@Service
@Transactional
public class BienServiceImpl implements BienService {

    private final Logger log = LoggerFactory.getLogger(BienServiceImpl.class);

    private final BienRepository bienRepository;

    public BienServiceImpl(BienRepository invitadoRepository) {
        this.bienRepository = invitadoRepository;
    }

    /**
     * Save a office.
     *
     * @param invitado the entity to save
     * @return the persisted entity
     */
    @Override
    public Bien save(Bien invitado) {
        log.debug("Request to save invitado : {}", invitado);
        return bienRepository.save(invitado);
    }

    /**
     * Get all the invitado.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    @Override
    @Transactional(readOnly = true)
    public Page<Bien> findAll(Pageable pageable) {
        log.debug("Request to get all Offices");
        return bienRepository.findAll(pageable);
    }

    /**
     * Get one office by id.
     *
     * @param id the id of the entity
     * @return the entity
     */
    @Override
    @Transactional(readOnly = true)
    public Optional<Bien> findOne(Long id) {
        log.debug("Request to get Invitado : {}", id);
        return bienRepository.findById(id);
    }

    @Override
    public Page<Bien> getBienByDescripcion(Pageable pageable, String descripcion) {
        //List<Invitado> list = invitadoRepository.getOrderInvitado();
        return bienRepository.getBienByDescripcion(pageable, descripcion);
    }

    /**
     * Delete the office by id.
     *
     * @param id the id of the entity
     */
    @Override
    public void delete(Long id) {
        log.debug("Request to delete Invitado : {}", id);
        bienRepository.deleteById(id);
    }
}
