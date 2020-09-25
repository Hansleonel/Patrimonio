package pe.gob.mindef.app.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pe.gob.mindef.app.domain.DetalleDocumento;
import pe.gob.mindef.app.domain.Documento;


/**
 * Spring Data  repository for the DetalleDocumento entity.
 */
@SuppressWarnings("unused")
@Repository
public interface DetalleDocumentoRepository extends JpaRepository<DetalleDocumento, Long> {

}
