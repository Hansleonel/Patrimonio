package pe.gob.mindef.app.domain;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Objects;

/**
 * A Invitado.
 */
@Entity
@Table(name = "T_M_PROCESO")
public class Proceso implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    /*@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "SQ_ASIGNACION")
    @SequenceGenerator(name = "SQ_ASIGNACION", sequenceName = "SQ_TT_ASIGNACION_ID")*/
    @Column(name = "IDPROCESO")
    private Long id_proceso;

    @Column(name = "NOMBREPROCESO")
    private String nombre_Proceso;

    public Proceso() {
    }

    public Proceso(Long id_proceso, String nombre_Proceso) {
        this.id_proceso = id_proceso;
        this.nombre_Proceso = nombre_Proceso;
    }

    public Long getId_proceso() {
        return id_proceso;
    }

    public void setId_proceso(Long id_proceso) {
        this.id_proceso = id_proceso;
    }

    public String getNombre_Proceso() {
        return nombre_Proceso;
    }

    public void setNombre_Proceso(String nombre_Proceso) {
        this.nombre_Proceso = nombre_Proceso;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Proceso)) return false;
        Proceso proceso = (Proceso) o;
        return Objects.equals(getId_proceso(), proceso.getId_proceso()) &&
            Objects.equals(getNombre_Proceso(), proceso.getNombre_Proceso());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getId_proceso(), getNombre_Proceso());
    }

    @Override
    public String toString() {
        return "Proceso{" +
            "id_proceso=" + id_proceso +
            ", nombre_Proceso='" + nombre_Proceso + '\'' +
            '}';
    }
}
