package pe.gob.mindef.app.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import pe.gob.mindef.app.domain.Bien;


/**
 * Spring Data  repository for the Office entity.
 */
@SuppressWarnings("unused")
@Repository
public interface BienRepository extends JpaRepository<Bien, Long> {
    @Query("select b from Bien b where b.estado_asignado = 'No Asignado' and b.descripcion like concat('%',:descripcion,'%')")
    Page<Bien> getBienByDescripcion(Pageable pageable, @Param("descripcion") String descripcion);
}
