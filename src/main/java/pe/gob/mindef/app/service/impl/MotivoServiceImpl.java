package pe.gob.mindef.app.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import pe.gob.mindef.app.domain.Motivo;
import pe.gob.mindef.app.domain.Proceso;
import pe.gob.mindef.app.repository.MotivoRepository;
import pe.gob.mindef.app.service.MotivoService;

@Service
public class MotivoServiceImpl implements MotivoService {

    private final MotivoRepository repository;

    public MotivoServiceImpl(MotivoRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<Motivo> findAll(Long idProceso) {
        Proceso p = new Proceso();
        p.setId_proceso(idProceso);
        return this.repository.findByProceso(p);
    }

}
