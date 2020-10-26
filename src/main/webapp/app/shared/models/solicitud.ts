import { IBien } from './bien';

export interface ISolicitud {
  id_solicitud: number;
  observacion: string;
  estado: number;
  fecha_solicitud: Date;
  dociden: string;
  autorizador: string;
  proceso: IProceso;
  fecha_atencio: Date;
  fecha_respuesta: Date;
  fechaFinalizado: Date;
  descripcionRespuesta: string;
  tipo: number;
  detalles?: ISolicitudDetalle[];
}

export interface IProceso {
  id_proceso: number;
  nombre_Proceso: string;
}

export interface ISolicitudDetalle {
  id?: number;
  solicitud?: ISolicitud;
  bien?: IBien;
}
