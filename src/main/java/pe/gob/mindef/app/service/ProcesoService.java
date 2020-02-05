package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.Proceso;

import java.util.Optional;

/**
 * Service Interface for managing Proceso.
 */
public interface ProcesoService {

    /**
     * Save a proceso.
     *
     * @param proceso the entity to save
     * @return the persisted entity
     */
    Proceso save(Proceso proceso);

    /**
     * Get all the procesos.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Proceso> findAll(Pageable pageable);

    /**
     * Get the "id" Proceso.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Proceso> findOne(Long id);

    /**
     * Delete the "id" proceso.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}
