import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconDownload } from '@icons';

export const AccountStatement = () => {
  const navigate = useNavigate();

  const handleDownload = (type) => {
    alert(`Descarga realizada: ${type}`);
  };

  return (
    <div className="cartola-container">
      <h1 className="cartola-title">Cartola</h1>
      <div className="download-buttons">
        <button
          className="download-button"
          onClick={() => handleDownload("PDF")}
        >
          Descargar PDF <IconDownload className="icon" />
        </button>
        <button
          className="download-button"
          onClick={() => handleDownload("Excel")}
        >
          Descargar Excel <IconDownload className="icon" />
        </button>
      </div>
      <table className="cartola-table">
        <thead>
          <tr>
            <th>Fecha Ingreso</th>
            <th>Cargo</th>
            <th>Abono</th>
            <th>Descripción</th>
            <th>Saldo</th>
            <th>Documento</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>5/08/24</td>
            <td>120.000</td>
            <td></td>
            <td>Gasto común, Agosto</td>
            <td>120.000</td>
            <td className="document-icon-cell">
              <IconDownload className="icon" aria-label="Descargar Documento" />
            </td>
          </tr>
          <tr>
            <td>5/08/24</td>
            <td>120.000</td>
            <td></td>
            <td>Gasto común, Agosto</td>
            <td>120.000</td>
            <td className="document-icon-cell">
              <IconDownload className="icon" aria-label="Descargar Documento" />
            </td>
          </tr>
          <tr>
            <td>5/08/24</td>
            <td>120.000</td>
            <td></td>
            <td>Gasto común, Agosto</td>
            <td>120.000</td>
            <td className="document-icon-cell">
              <IconDownload className="icon" aria-label="Descargar Documento" />
            </td>
          </tr>
          <tr>
            <td>5/08/24</td>
            <td>120.000</td>
            <td></td>
            <td>Gasto común, Agosto</td>
            <td>120.000</td>
            <td className="document-icon-cell">
              <IconDownload className="icon" aria-label="Descargar Documento" />
            </td>
          </tr>
          <tr>
            <td>5/08/24</td>
            <td>120.000</td>
            <td></td>
            <td>Gasto común, Agosto</td>
            <td>120.000</td>
            <td className="document-icon-cell">
              <IconDownload className="icon" aria-label="Descargar Documento" />
            </td>
          </tr>
        </tbody>
      </table>
      <button className="back-button" onClick={() => navigate("/home")}>
        Volver a Inicio
      </button>
    </div>
  );
};

