package pe.gob.mindef.app.domain;

import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.Objects;
import java.util.Set;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_M_ROLES")
public class ProcesoRol implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_ROLES")
    @SequenceGenerator(name = "SQ_ROLES", sequenceName = "SQ_TT_ROLES_ID", allocationSize = 1)
    @Column(name = "IDROLES")
    private Long idDocumento;

    @ManyToOne(targetEntity = Proceso.class)
    @JoinColumn(name = "IDPROCESO", referencedColumnName = "IDPROCESO", foreignKey = @ForeignKey(name = "FK_ROLES_PROCESO"))
    private Proceso proceso;

    @Column(name = "TIPOFIRMA")
    private int tipoFirma;

    @Column(name = "REQUERIDO")
    private Boolean requerido;

    @Column(name = "NOMBRE")
    private String nombre;

    public ProcesoRol() {
    }

    public ProcesoRol(Proceso proceso, int tipoFirma, Boolean requerido, String nombre) {
        this.proceso = proceso;
        this.tipoFirma = tipoFirma;
        this.requerido = requerido;
        this.nombre = nombre;
    }

    public Long getIdDocumento() {
        return idDocumento;
    }

    public void setIdDocumento(Long idDocumento) {
        this.idDocumento = idDocumento;
    }

    public Proceso getProceso() {
        return proceso;
    }

    public void setProceso(Proceso proceso) {
        this.proceso = proceso;
    }

    public int getTipoFirma() {
        return tipoFirma;
    }

    public void setTipoFirma(int tipoFirma) {
        this.tipoFirma = tipoFirma;
    }

    public Boolean getRequerido() {
        return requerido;
    }

    public void setRequerido(Boolean requerido) {
        this.requerido = requerido;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof ProcesoRol)) return false;
        ProcesoRol that = (ProcesoRol) o;
        return Objects.equals(getIdDocumento(), that.getIdDocumento()) &&
            Objects.equals(getProceso(), that.getProceso()) &&
            Objects.equals(getTipoFirma(), that.getTipoFirma()) &&
            Objects.equals(getRequerido(), that.getRequerido()) &&
            Objects.equals(getNombre(), that.getNombre());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getIdDocumento(), getProceso(), getTipoFirma(), getRequerido(), getNombre());
    }

    @Override
    public String toString() {
        return "ProcesoRol{" +
            "idDocumento=" + idDocumento +
            ", proceso=" + proceso +
            ", tipoFirma='" + tipoFirma + '\'' +
            ", requerido='" + requerido + '\'' +
            ", nombre='" + nombre + '\'' +
            '}';
    }
}
