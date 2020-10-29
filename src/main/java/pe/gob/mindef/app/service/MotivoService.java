package pe.gob.mindef.app.service;

import java.util.List;

import pe.gob.mindef.app.domain.Motivo;

public interface MotivoService {
    List<Motivo> findAll(Long idProceso);
}
