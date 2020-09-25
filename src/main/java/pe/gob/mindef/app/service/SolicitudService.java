package pe.gob.mindef.app.service;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import pe.gob.mindef.app.domain.Solicitud;

import java.util.List;
import java.util.Optional;

/**
 * Service Interface for managing Office.
 */
public interface SolicitudService {

    /**
     * Save a office.
     *
     * @param solicitud the entity to save
     * @return the persisted entity
     */
    Solicitud save(Solicitud solicitud);

    Solicitud saveDesplazamiento(Solicitud solicitud, List<Long> codigosbien);

    /**
     * Get all the solicitud.
     *
     * @param pageable the pagination information
     * @return the list of entities
     */
    Page<Solicitud> findAll(Pageable pageable);

    /**
     * Get the "id" Solicitud.
     *
     * @param id the id of the entity
     * @return the entity
     */
    Optional<Solicitud> findOne(Long id);


    Page<Solicitud> getSolicitudByUser(Pageable pageable, String dni);



    /**
     * Delete the "id" solicitud.
     *
     * @param id the id of the entity
     */
    void delete(Long id);

}
