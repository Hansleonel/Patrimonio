package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.Asignacion;
import pe.gob.mindef.app.domain.Bien;

import java.util.Optional;

/**
 * Service Interface for managing Office.
 */
public interface AsignacionService {

    /**
     * Save a office.
     *
     * @param asignacion the entity to save
     * @return the persisted entity
     */
    Asignacion save(Asignacion asignacion);

    /**
     * Get all the offices.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Asignacion> findAll(Pageable pageable);

    /**
     * Get the "id" Asignacion.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Asignacion> findOne(Long id);

    /**
     * Delete the "id" office.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}
