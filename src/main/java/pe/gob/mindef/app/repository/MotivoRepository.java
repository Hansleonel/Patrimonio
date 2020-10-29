package pe.gob.mindef.app.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import pe.gob.mindef.app.domain.Motivo;
import pe.gob.mindef.app.domain.Proceso;

@Repository
public interface MotivoRepository extends JpaRepository<Motivo, Long> {
    List<Motivo> findByProceso(Proceso proceso);
}
