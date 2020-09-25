package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.DetalleDocumento;
import pe.gob.mindef.app.domain.Documento;

import java.util.Optional;

/**
 * Service Interface for managing Office.
 */
public interface DetalleDocumentoService {

    /**
     * Save a DetalleDocumento.
     *
     * @param detalleDocumento the entity to save
     * @return the persisted entity
     */
    DetalleDocumento save(DetalleDocumento detalleDocumento);

    /**
     * Get all the detalleDocumento.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<DetalleDocumento> findAll(Pageable pageable);

    /**
     * Get the "id" detalleDocumento.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<DetalleDocumento> findOne(Long id);

    /**
     * Delete the "id" detalleDocumento.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}
