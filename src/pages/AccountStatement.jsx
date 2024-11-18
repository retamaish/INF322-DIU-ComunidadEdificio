import React from 'react'
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined'
import DefaultBackground from '../assets/stockphotobuilding.jpg'
import { Navbar } from '@components'

export const AccountStatement = () => {
  const handleDownload = (type) => {
    window.alert(`Descarga realizada: ${type}`)
  }

  const handleDocumentDownload = () => {
    window.alert('Documento descargado')
  }

  return (
    <div
      className='account-statement'
      style={{
        display: 'flex',
        backgroundImage: `url(${DefaultBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        transition: 'background-image 0.5s ease',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#f2f3f4',
          borderRadius: '12px',
          padding: '2rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          color: '#333',
          width: '80%',
          maxWidth: '1000px',
          margin: '2rem 0',
          overflow: 'hidden'
        }}
      >
        <Navbar />
        <h1
          className='account-statement__title'
          style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            marginBottom: '1.5rem',
            textAlign: 'center'
          }}
        >
          Cartola
        </h1>
        <table
          className='account-statement__table'
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            marginBottom: '2rem'
          }}
        >
          <thead>
            <tr>
              <th style={headerStyle}>Fecha Ingreso</th>
              <th style={headerStyle}>Cargo</th>
              <th style={headerStyle}>Abono</th>
              <th style={headerStyle}>Descripción</th>
              <th style={headerStyle}>Saldo</th>
              <th style={headerStyle}>Documento</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, index) => {
              if (index === 2) {
                // Fila para "Reserva de Quincho" con cargo y abono separados
                return (
                  <React.Fragment key={2}>
                    <tr key={index} style={rowStyle}>
                      <td style={cellStyle}>05/11/24</td>
                      <td style={cellStyle}>120.000</td>
                      <td style={cellStyle} />
                      <td style={cellStyle}>Reserva de Quincho</td>
                      <td style={cellStyle}>120.000</td>
                      <td style={cellStyle} className='document-icon-cell'>
                        <FileDownloadOutlinedIcon className='icon' aria-label='Descargar Documento' onClick={handleDocumentDownload} />
                      </td>
                    </tr>
                    <tr style={rowStyle}>
                      <td style={cellStyle}>10/11/24</td>
                      <td style={cellStyle} />
                      <td style={cellStyle}>120.000</td>
                      <td style={cellStyle}>Abono Reserva de Quincho</td>
                      <td style={cellStyle}>0</td>
                      <td style={cellStyle} className='document-icon-cell'>
                        <FileDownloadOutlinedIcon className='icon' aria-label='Descargar Documento' onClick={handleDocumentDownload} />
                      </td>
                    </tr>
                  </React.Fragment>
                )
              }
              // Fila para "Pago de Gastos Comunes" con cargo y abono
              if (index !== 3) {
                return (
                  <React.Fragment key={3}>
                    <tr key={index} style={rowStyle}>
                      <td style={cellStyle}>05/11/24</td>
                      <td style={cellStyle}>125.000</td>
                      <td style={cellStyle} />
                      <td style={cellStyle}>Pago de Gastos Comunes</td>
                      <td style={cellStyle}>125.000</td>
                      <td style={cellStyle} className='document-icon-cell'>
                        <FileDownloadOutlinedIcon className='icon' aria-label='Descargar Documento' onClick={handleDocumentDownload} />
                      </td>
                    </tr>
                    <tr style={rowStyle}>
                      <td style={cellStyle}>10/11/24</td>
                      <td style={cellStyle} />
                      <td style={cellStyle}>125.000</td>
                      <td style={cellStyle}>Abono Gastos Comunes</td>
                      <td style={cellStyle}>0</td>
                      <td style={cellStyle} className='document-icon-cell'>
                        <FileDownloadOutlinedIcon className='icon' aria-label='Descargar Documento' onClick={handleDocumentDownload} />
                      </td>
                    </tr>
                  </React.Fragment>
                )
              }

              return (
                <tr key={index} style={rowStyle}>
                  <td style={cellStyle}>15/11/24</td>
                  <td style={cellStyle} />
                  <td style={cellStyle} />
                  <td style={cellStyle}>Pago de Gastos Comunes</td>
                  <td style={cellStyle}>125.000</td>
                  <td style={cellStyle} className='document-icon-cell'>
                    <FileDownloadOutlinedIcon className='icon' aria-label='Descargar Documento' onClick={handleDocumentDownload} />
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <div
          className='download-buttons'
          style={{
            display: 'flex',
            justifyContent: 'space-around',
            marginTop: '0rem'
          }}
        >
          <button
            className='download-button'
            style={buttonStyle('#4d7aa7')}
            onClick={() => handleDownload('PDF')}
          >
            Descargar PDF <FileDownloadOutlinedIcon className='icon' />
          </button>
          <button
            className='download-button'
            style={buttonStyle('#4d7aa7')}
            onClick={() => handleDownload('Excel')}
          >
            Descargar Excel <FileDownloadOutlinedIcon className='icon' />
          </button>

        </div>
      </div>
    </div>
  )
}

const headerStyle = {
  backgroundColor: '#444',
  color: '#fff',
  padding: '0.75rem 1rem',
  textAlign: 'left',
  borderBottom: '2px solid #777'
}

const rowStyle = {
  borderBottom: '1px solid #ccc'
}

const cellStyle = {
  padding: '0.75rem 1rem',
  textAlign: 'left'
}

const buttonStyle = (backgroundColor) => ({
  backgroundColor,
  color: '#fff',
  border: 'none',
  padding: '0.75rem 1.25rem',
  margin: '0.5rem',
  borderRadius: '6px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  display: 'flex',
  alignItems: 'center'
})
