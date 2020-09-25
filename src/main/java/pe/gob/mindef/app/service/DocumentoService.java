package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.Documento;

import java.util.Optional;

/**
 * Service Interface for managing Office.
 */
public interface DocumentoService {

    /**
     * Save a Documento.
     *
     * @param documento the entity to save
     * @return the persisted entity
     */
    Documento save(Documento documento);

    /**
     * Get all the documento.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Documento> findAll(Pageable pageable);

    /**
     * Get the "id" documento.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Documento> findOne(Long id);

    /**
     * Delete the "id" documento.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}
