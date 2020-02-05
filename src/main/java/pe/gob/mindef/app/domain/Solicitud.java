package pe.gob.mindef.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_T_SOLICITUD")
// @Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Solicitud implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_SOLICITUD")
    @SequenceGenerator(name = "SQ_SOLICITUD", sequenceName = "SQ_TT_SOLICITUD_ID"
    )
    @Column(name = "IDSOLICITUD")
    private Long id_solicitud;

    @Column(name = "OBSERVACION")
    private String observacion;

    @Column(name = "ESTADO")
    private int estado;

    @Column(name = "FECHASOLICITUD")
    private Date fecha_solicitud;

    @Column(name = "DOCIDEN")
    private String dociden;

    @ManyToOne(targetEntity = Proceso.class)
    @JoinColumn(name = "IDPROCESO", referencedColumnName = "IDPROCESO", foreignKey = @ForeignKey(name = "FK_SOLICITUD_PROCESO"))
    private Proceso proceso;

    @Column(name = "FECHAATENCION")
    private Date fecha_atencion;

    @Column(name = "FECHARESPUESTA")
    private Date fecha_respuesta;


    public Solicitud() {
    }

    public Solicitud(String observacion, int estado, Date fecha_solicitud, String dociden, Proceso proceso, Date fecha_atencion, Date fecha_respuesta) {
        this.observacion = observacion;
        this.estado = estado;
        this.fecha_solicitud = fecha_solicitud;
        this.dociden = dociden;
        this.proceso = proceso;
        this.fecha_atencion = fecha_atencion;
        this.fecha_respuesta = fecha_respuesta;
    }

    public Long getId_solicitud() {
        return id_solicitud;
    }

    public void setId_solicitud(Long id_solicitud) {
        this.id_solicitud = id_solicitud;
    }

    public String getObservacion() {
        return observacion;
    }

    public void setObservacion(String observacion) {
        this.observacion = observacion;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }

    public Date getFecha_solicitud() {
        return fecha_solicitud;
    }

    public void setFecha_solicitud(Date fecha_solicitud) {
        this.fecha_solicitud = fecha_solicitud;
    }

    public String getDociden() {
        return dociden;
    }

    public void setDociden(String dociden) {
        this.dociden = dociden;
    }

    public Proceso getProceso() {
        return proceso;
    }

    public void setProceso(Proceso proceso) {
        this.proceso = proceso;
    }

    public Date getFecha_atencion() {
        return fecha_atencion;
    }

    public void setFecha_atencion(Date fecha_atencion) {
        this.fecha_atencion = fecha_atencion;
    }

    public Date getFecha_respuesta() {
        return fecha_respuesta;
    }

    public void setFecha_respuesta(Date fecha_respuesta) {
        this.fecha_respuesta = fecha_respuesta;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Solicitud)) return false;
        Solicitud solicitud = (Solicitud) o;
        return getEstado() == solicitud.getEstado() &&
            Objects.equals(getId_solicitud(), solicitud.getId_solicitud()) &&
            Objects.equals(getObservacion(), solicitud.getObservacion()) &&
            Objects.equals(getFecha_solicitud(), solicitud.getFecha_solicitud()) &&
            Objects.equals(getDociden(), solicitud.getDociden()) &&
            Objects.equals(getProceso(), solicitud.getProceso()) &&
            Objects.equals(getFecha_atencion(), solicitud.getFecha_atencion()) &&
            Objects.equals(getFecha_respuesta(), solicitud.getFecha_respuesta());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_solicitud(), getObservacion(), getEstado(), getFecha_solicitud(), getDociden(), getProceso(), getFecha_atencion(), getFecha_respuesta());
    }

    @Override
    public String toString() {
        return "Solicitud{" +
            "id_solicitud=" + id_solicitud +
            ", observacion='" + observacion + '\'' +
            ", estado=" + estado +
            ", fecha_solicitud=" + fecha_solicitud +
            ", dociden='" + dociden + '\'' +
            ", proceso=" + proceso +
            ", fecha_atencion=" + fecha_atencion +
            ", fecha_respuesta=" + fecha_respuesta +
            '}';
    }
}
