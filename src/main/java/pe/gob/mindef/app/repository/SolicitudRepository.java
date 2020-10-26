package pe.gob.mindef.app.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pe.gob.mindef.app.domain.Proceso;
import pe.gob.mindef.app.domain.Solicitud;

/**
 * Spring Data repository for the Office entity.
 */
@SuppressWarnings("unused")
@Repository
public interface SolicitudRepository extends JpaRepository<Solicitud, Long> {

    @Query("select s from Solicitud s where s.dociden = :dni")
    Page<Solicitud> getSolicitudByUser(Pageable pageable, @Param("dni") String dni);

    List<Solicitud> getSolicitudByProcesoAndDociden(Proceso proceso, String dociden);

    List<Solicitud> getSolicitudByProcesoAndAutorizador(Proceso proceso, String autorizador);
}
