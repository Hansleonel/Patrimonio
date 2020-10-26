package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.Bien;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Office.
 */
public interface BienService {

    /**
     * Save a office.
     *
     * @param invitado the entity to save
     * @return the persisted entity
     */
    Bien save(Bien invitado);

    /**
     * Get all the offices.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Bien> findAll(Pageable pageable);

    /**
     * Get the "id" office.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Bien> findOne(Long id);

    Page<Bien> getBienByDescripcion(Pageable pageable, String descripcion);

    /**
     * Delete the "id" office.
     *
     * @param id the id of the entity
     */
    void delete(Long id);


    List<Bien> getAllByEmpleado(long empleado);
}
