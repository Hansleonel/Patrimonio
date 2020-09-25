package pe.gob.mindef.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_M_MOTIVO")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Motivo implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_MOTIVO")
    @SequenceGenerator(name = "SQ_MOTIVO", sequenceName = "SQ_TM_MOTIVO_ID", allocationSize = 1)

    @Column(name = "IDMOTIVO")
    private Long idMotivo;

    @Column(name = "DESCRIPCION")
    private String observacion;

    @ManyToOne(targetEntity = Proceso.class)
    @JoinColumn(name = "IDPROCESO", referencedColumnName = "IDPROCESO", foreignKey = @ForeignKey(name = "FK_MOTIVO_PROCESO"))
    private Proceso proceso;

    public Motivo() {
    }

    public Motivo(String observacion, Proceso proceso) {
        this.observacion = observacion;
        this.proceso = proceso;
    }

    public Long getIdMotivo() {
        return idMotivo;
    }

    public void setIdMotivo(Long idMotivo) {
        this.idMotivo = idMotivo;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public Proceso getProceso() {
        return proceso;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Motivo)) return false;
        Motivo motivo = (Motivo) o;
        return Objects.equals(getIdMotivo(), motivo.getIdMotivo()) &&
            Objects.equals(getObservacion(), motivo.getObservacion()) &&
            Objects.equals(getProceso(), motivo.getProceso());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdMotivo(), getObservacion(), getProceso());
    }

    public void setProceso(Proceso proceso) {
        this.proceso = proceso;
    }

    @Override
    public String toString() {
        return "Motivo{" +
            "idMotivo=" + idMotivo +
            ", observacion='" + observacion + '\'' +
            ", proceso=" + proceso +
            '}';
    }
}
