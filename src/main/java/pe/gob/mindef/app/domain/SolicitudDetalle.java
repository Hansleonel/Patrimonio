package pe.gob.mindef.app.domain;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "T_T_SOLICITUD_DETALLE")
public class SolicitudDetalle implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_SOLICITUD_DETALLE")
    @SequenceGenerator(name = "SQ_SOLICITUD_DETALLE", sequenceName = "SQ_TT_SOLICITUD_DETALLE_ID", allocationSize = 1)
    @Column(name = "ID_SOLICITUD_DETALLE")
    private Long id;

    @JsonBackReference
    @ManyToOne(targetEntity = Solicitud.class)
    @JoinColumn(name = "ID_SOLICITUD", referencedColumnName = "IDSOLICITUD", foreignKey = @ForeignKey(name = "FK_DETALLE_SOLICITUD"))
    private Solicitud solicitud;

    @ManyToOne(targetEntity = Bien.class)
    @JoinColumn(name = "ID_BIEN", foreignKey = @ForeignKey(name = "FK_DETALLE_BIEN"))
    private Bien bien;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Solicitud getSolicitud() {
        return solicitud;
    }

    public void setSolicitud(Solicitud solicitud) {
        this.solicitud = solicitud;
    }

    public Bien getBien() {
        return bien;
    }

    public void setBien(Bien bien) {
        this.bien = bien;
    }

}
