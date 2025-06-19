import { useState } from 'react'
import AnimatedDonutChart from './AnimatedDonutChart'

function App() {
  const [activeTab, setActiveTab] = useState('resumen')

  // Datos del informe
  const planData = {
    minutosContratados: 1000,
    minutosConsumidos: 726,
    minutosDisponibles: 274,
    porcentajeConsumido: 72.6
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #f9fafb, #dbeafe)', 
      padding: '1.5rem' 
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ 
            fontSize: '2.25rem', 
            fontWeight: '700', 
            color: '#111827', 
            marginBottom: '0.5rem',
            background: 'linear-gradient(to right, #2563eb, #9333ea)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            📊 Dashboard de Gestión de Llamadas
          </h1>
          <p style={{ fontSize: '1.125rem', color: '#4b5563' }}>
            Plataforma de Agendamiento con Animaciones
          </p>
        </div>

        {/* Tabs */}
        <div style={{ marginBottom: '1.5rem' }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(5, minmax(0, 1fr))', 
            backgroundColor: '#ffffff', 
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
            borderRadius: '0.5rem',
            padding: '0.25rem'
          }}>
            {['resumen', 'distribucion', 'historial', 'activas', 'kpis'].map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '0.375rem 0.75rem',
                  borderRadius: '0.125rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  backgroundColor: activeTab === tab ? '#ffffff' : 'transparent',
                  color: activeTab === tab ? '#111827' : '#4b5563',
                  boxShadow: activeTab === tab ? '0 1px 2px 0 rgb(0 0 0 / 0.05)' : 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                {tab === 'resumen' && 'Resumen General'}
                {tab === 'distribucion' && 'Distribución'}
                {tab === 'historial' && 'Historial'}
                {tab === 'activas' && 'Llamadas Activas'}
                {tab === 'kpis' && 'KPIs'}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {activeTab === 'resumen' && (
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {/* Minutos Contratados */}
            <div style={{ 
              borderRadius: '0.5rem', 
              backgroundColor: '#ffffff', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
              background: 'linear-gradient(to bottom right, #ffffff, #eff6ff)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 1.5rem 0.5rem' 
              }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Minutos Contratados</h3>
                <span style={{ fontSize: '1.25rem' }}>📞</span>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#2563eb' }}>
                  {planData.minutosContratados.toLocaleString()}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Plan mensual</p>
              </div>
            </div>

            {/* Minutos Consumidos */}
            <div style={{ 
              borderRadius: '0.5rem', 
              backgroundColor: '#ffffff', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
              background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 1.5rem 0.5rem' 
              }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Minutos Consumidos</h3>
                <span style={{ fontSize: '1.25rem' }}>⏰</span>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#059669' }}>
                  {planData.minutosConsumidos.toLocaleString()}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>A la fecha</p>
              </div>
            </div>

            {/* Minutos Disponibles */}
            <div style={{ 
              borderRadius: '0.5rem', 
              backgroundColor: '#ffffff', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
              background: 'linear-gradient(to bottom right, #ffffff, #faf5ff)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 1.5rem 0.5rem' 
              }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Minutos Disponibles</h3>
                <span style={{ fontSize: '1.25rem' }}>📈</span>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#7c3aed' }}>
                  {planData.minutosDisponibles.toLocaleString()}
                </div>
                <p style={{ fontSize: '0.75rem', color: '#4b5563' }}>Restantes</p>
              </div>
            </div>

            {/* Porcentaje Consumido */}
            <div style={{ 
              borderRadius: '0.5rem', 
              backgroundColor: '#ffffff', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
              background: 'linear-gradient(to bottom right, #ffffff, #fff7ed)',
              transition: 'all 0.3s',
              cursor: 'pointer'
            }}>
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                padding: '1.5rem 1.5rem 0.5rem' 
              }}>
                <h3 style={{ fontSize: '0.875rem', fontWeight: '500' }}>Porcentaje Consumido</h3>
                <span style={{ fontSize: '1.25rem' }}>👥</span>
              </div>
              <div style={{ padding: '0 1.5rem 1.5rem' }}>
                <div style={{ fontSize: '1.875rem', fontWeight: '700', color: '#ea580c' }}>
                  {planData.porcentajeConsumido}%
                </div>
                <div style={{ 
                  marginTop: '0.5rem',
                  height: '1rem', 
                  width: '100%', 
                  backgroundColor: '#e5e7eb', 
                  borderRadius: '9999px',
                  overflow: 'hidden'
                }}>
                  <div style={{ 
                    height: '100%', 
                    backgroundColor: '#3b82f6', 
                    width: `${planData.porcentajeConsumido}%`,
                    transition: 'all 0.3s'
                  }} />
                </div>
              </div>
            </div>

            {/* Gráfica Circular Animada */}
            <div style={{ 
              borderRadius: '0.5rem', 
              backgroundColor: '#ffffff', 
              boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
              background: 'linear-gradient(to bottom right, #ffffff, #f0fdf4)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1.5rem 0'
            }}>
              <AnimatedDonutChart value={planData.porcentajeConsumido} label="Consumo" color="#3b82f6" />
              <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#374151', fontWeight: 500 }}>
                Gráfica Animada de Consumo
              </div>
            </div>
          </div>
        )}

        {activeTab === 'distribucion' && (
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
            padding: '1.5rem' 
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Distribución por Tipo de Gestión
            </h2>
            <p style={{ fontSize: '0.875rem', color: '#4b5563', marginBottom: '1.5rem' }}>
              Minutos consumidos por cada tipo de gestión
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
              {[
                { tipo: 'Agendamiento de citas', minutos: 215, porcentaje: 29.6, color: '#3b82f6' },
                { tipo: 'Cancelación de citas', minutos: 102, porcentaje: 14.0, color: '#ef4444' },
                { tipo: 'Reagendamiento de citas', minutos: 64, porcentaje: 8.8, color: '#f59e0b' },
                { tipo: 'Consultas de citas', minutos: 180, porcentaje: 24.8, color: '#10b981' },
                { tipo: 'Otros', minutos: 165, porcentaje: 22.7, color: '#8b5cf6' }
              ].map((item, index) => (
                <div key={index} style={{ 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center', 
                  padding: '0.5rem', 
                  borderRadius: '0.5rem',
                  transition: 'background-color 0.15s'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ 
                      width: '0.75rem', 
                      height: '0.75rem', 
                      borderRadius: '9999px', 
                      backgroundColor: item.color 
                    }} />
                    <span style={{ fontSize: '0.875rem', fontWeight: '500' }}>{item.tipo}</span>
                  </div>
                  <span style={{ fontSize: '0.875rem', fontWeight: '700', color: '#374151' }}>
                    {item.minutos} min ({item.porcentaje}%)
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'kpis' && (
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '0.5rem',
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              Indicadores KPI
            </h2>
            <AnimatedDonutChart value={planData.porcentajeConsumido} label="Consumo" color="#3b82f6" />
            <div style={{ marginTop: '1rem', fontSize: '1rem', color: '#374151', fontWeight: 500 }}>
              Gráfica Animada de Consumo
            </div>
          </div>
        )}

        {activeTab !== 'resumen' && activeTab !== 'distribucion' && activeTab !== 'kpis' && (
          <div style={{ 
            backgroundColor: '#ffffff', 
            borderRadius: '0.5rem', 
            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)', 
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '1rem' }}>
              {activeTab === 'historial' && 'Historial de Consumo'}
              {activeTab === 'activas' && 'Llamadas Activas'}
            </h2>
            <p style={{ color: '#4b5563' }}>
              Contenido de {activeTab} - Dashboard funcionando correctamente
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default App

