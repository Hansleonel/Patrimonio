package pe.gob.mindef.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_ASIGNACION")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Asignacion implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_ASIGNACION")
    @SequenceGenerator(name = "SQ_ASIGNACION", sequenceName = "SQ_TT_ASIGNACION_ID" )
    @Column(name = "ID_ASIGNACION")
    private Long id_asignacion;

    @Column(name = "ID_EMPLEADO")
    private String id_empleado;

    @Column(name = "MODALIDAD")
    private String modalidad;

    @Column(name = "JEFE_APROBACION")
    private String jefe_aprobacion;

    @Column(name = "PATRIMONIO_APROBACION")
    private String patrimonio_aprobacion;

    @Column(name = "ID_BIEN")
    private Long id_bien;

    @Column(name = "FECHA_ASIGNACION")
    private String fecha_asignacion;

    @Column(name = "ESTADO_ASIGNACION")
    private String estado_asignacion;

    public Asignacion() {
    }

    public Asignacion(String id_empleado, String modalidad, String jefe_aprobacion, String patrimonio_aprobacion, Long id_bien, String fecha_asignacion, String estado_asignacion) {
        this.id_empleado = id_empleado;
        this.modalidad = modalidad;
        this.jefe_aprobacion = jefe_aprobacion;
        this.patrimonio_aprobacion = patrimonio_aprobacion;
        this.id_bien = id_bien;
        this.fecha_asignacion = fecha_asignacion;
        this.estado_asignacion = estado_asignacion;
    }

    public Long getId_asignacion() {
        return id_asignacion;
    }

    public void setId_asignacion(Long id_asignacion) {
        this.id_asignacion = id_asignacion;
    }

    public String getId_empleado() {
        return id_empleado;
    }

    public void setId_empleado(String id_empleado) {
        this.id_empleado = id_empleado;
    }

    public String getModalidad() {
        return modalidad;
    }

    public void setModalidad(String modalidad) {
        this.modalidad = modalidad;
    }

    public String getJefe_aprobacion() {
        return jefe_aprobacion;
    }

    public void setJefe_aprobacion(String jefe_aprobacion) {
        this.jefe_aprobacion = jefe_aprobacion;
    }

    public String getPatrimonio_aprobacion() {
        return patrimonio_aprobacion;
    }

    public void setPatrimonio_aprobacion(String patrimonio_aprobacion) {
        this.patrimonio_aprobacion = patrimonio_aprobacion;
    }

    public Long getId_bien() {
        return id_bien;
    }

    public void setId_bien(Long id_bien) {
        this.id_bien = id_bien;
    }

    public String getFecha_asignacion() {
        return fecha_asignacion;
    }

    public void setFecha_asignacion(String fecha_asignacion) {
        this.fecha_asignacion = fecha_asignacion;
    }

    public String getEstado_asignacion() {
        return estado_asignacion;
    }

    public void setEstado_asignacion(String estado_asignacion) {
        this.estado_asignacion = estado_asignacion;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Asignacion)) return false;
        Asignacion that = (Asignacion) o;
        return Objects.equals(getId_asignacion(), that.getId_asignacion()) &&
            Objects.equals(getId_empleado(), that.getId_empleado()) &&
            Objects.equals(getModalidad(), that.getModalidad()) &&
            Objects.equals(getJefe_aprobacion(), that.getJefe_aprobacion()) &&
            Objects.equals(getPatrimonio_aprobacion(), that.getPatrimonio_aprobacion()) &&
            Objects.equals(getId_bien(), that.getId_bien()) &&
            Objects.equals(getFecha_asignacion(), that.getFecha_asignacion()) &&
            Objects.equals(getEstado_asignacion(), that.getEstado_asignacion());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_asignacion(), getId_empleado(), getModalidad(), getJefe_aprobacion(), getPatrimonio_aprobacion(), getId_bien(), getFecha_asignacion(), getEstado_asignacion());
    }

    @Override
    public String toString() {
        return "Asignacion{" +
            "id_asignacion=" + id_asignacion +
            ", id_empleado='" + id_empleado + '\'' +
            ", modalidad='" + modalidad + '\'' +
            ", jefe_aprobacion='" + jefe_aprobacion + '\'' +
            ", patrimonio_aprobacion='" + patrimonio_aprobacion + '\'' +
            ", id_bien=" + id_bien +
            ", fecha_asignacion='" + fecha_asignacion + '\'' +
            ", estado_asignacion='" + estado_asignacion + '\'' +
            '}';
    }
}
