import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SERVER_API_URL } from 'app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class BienesService {
  a = {};

  /* a = {
    "ano_e": 2019,
    "caracteristica": "EQUIPO DE AIRE ACONDICIONADO DE 24,000 BTU MITSUBISHI",
    "centro_costo": 3030117,
    "clase_bien": 22,
    "clasificador": "2.6. 3  2. 9  1",
    "codigo_color": 1,
    "codigo_marca": 328,
    "codigo_ubicacion": 166,
    "descripcion": "EQUIPO PARA AIRE ACONDICIONADO TIPO DOMESTICO",
    "empleado": 10718,
    "estado_activo": "Activo Fijo",
    "estado_asignado": "Asignado",
    "estado_consercacion": "Regular",
    "estado_reparacion": "Pendiente",
    "familia_bien": 3614,
    "grupo_bien": 11,
    "id_interno": 65,
    "id_patrimonio": 952299120060,
    "item_bien": 1,
    "mayor": 1503,
    "nroserie": null,
    "medidas": "0",
    "modelo": "[NO ESPECIFICA]",
    "nombre_color": null,
    "origen_activo": "O/C",
    "pliego": 26,
    "salida": "NO",
    "secuencia": 2241,
    "sede": 1,
    "sub_cta": 20901,
    "tipo_bien": "B",
    "tipo_ubicacion": 1,
    "valor_deprec": "6840.99",
    "valor_inicial": "6841.99"
  }; */

  constructor(private http: HttpClient) {}

  getBien() {
    return this.http.get(`${SERVER_API_URL}api/bien?page=1&size=2000`);
  }

  getBienes() {
    return this.http.get(`${SERVER_API_URL}api/bien`);
  }

  getBienCodigo(codigoSIGA) {
    return this.http.get(`${SERVER_API_URL}api/bien/${codigoSIGA}`);
  }

  postBien(
    codigoPatrimonial,
    codigoInterno,
    secuenciaBien,
    tipoBien,
    grupoBien,
    claseBien,
    familiaBien,
    itemBien,
    descripcionBien,
    sedeBien,
    pliegoBien,
    centrocosto,
    empleadoBien,
    origenactivo,
    tipoubicacion,
    codigoUbicacion,
    marca,
    codigoColor,
    nombreColor,
    caracteristicaBien,
    modeloBien,
    medidasBien,
    nroSerieBien,
    valorInicial,
    valorDep,
    clasificadorBien,
    anoE,
    subcta,
    mayorBien,
    reparacion,
    slidaBi,
    estado,
    conservacion,
    valorEstadoAsignacion
  ) {
    this.a = {
      id_patrimonio: codigoPatrimonial,
      id_interno: codigoInterno,
      secuencia: secuenciaBien,
      tipo_bien: tipoBien,
      grupo_bien: grupoBien,
      clase_bien: claseBien,
      familia_bien: familiaBien,
      item_bien: itemBien,
      escripcion: descripcionBien,
      sede: sedeBien,
      pliego: pliegoBien,
      centro_costo: centrocosto,
      empleado: empleadoBien,
      origen_activo: origenactivo,
      tipo_ubicacion: tipoubicacion,
      codigo_ubicacion: codigoUbicacion,
      codigo_marca: marca,
      codigo_color: codigoColor,
      caracteristica: caracteristicaBien,
      modelo: modeloBien,
      medidas: medidasBien,
      valor_inicial: valorInicial,
      valor_deprec: valorDep,
      clasificador: clasificadorBien,
      ano_e: anoE,
      sub_cta: subcta,
      mayor: mayorBien,
      estado_asignado: valorEstadoAsignacion,
      estado_reparacion: reparacion,
      salida: slidaBi,
      estado_activo: estado,
      estado_consercacion: conservacion,
      nroserie: nroSerieBien
    };
    return this.http.post(`${SERVER_API_URL}api/bien`, this.a);

    // return this.http.post(`http://localhost:9000/api/bien`, this.a)
  }
}
