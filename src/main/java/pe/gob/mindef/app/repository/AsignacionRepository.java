package pe.gob.mindef.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.gob.mindef.app.domain.Asignacion;


/**
 * Spring Data  repository for the Office entity.
 */
@SuppressWarnings("unused")
@Repository
public interface AsignacionRepository extends JpaRepository<Asignacion, Long> {

}
