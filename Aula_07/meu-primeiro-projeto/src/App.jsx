import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  return (
    <div style={{
      background: '#f8f9fa',
      minHeight: '100vh',
      padding: '40px 20px',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{
          color: '#1f2937',
          fontSize: '48px',
          fontWeight: '800',
          margin: '0 0 12px 0',
          letterSpacing: '-1px'
        }}>Bem-vindo ao React</h1>
        <p style={{
          color: '#6b7280',
          fontSize: '18px',
          margin: '0 0 40px 0',
          lineHeight: '1.6'
        }}>Aplicação de demonstração com componentes elegantes e profissionais</p>

        <Painel/>
        <Saudacao/>

        <div style={{ marginTop: '48px' }}>
          <h2 style={{
            color: '#1f2937',
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px'
          }}>Perfis de Usuários</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}>
            <Perfil nome="Samuel" cargo="Professor Sigma e Alpha" />
            <Perfil nome="Guilherme" cargo="Padeiro" />
          </div>
        </div>

        <Sobre Idade="67 anos" Cidade="Engenheiro Coelho" Profissao="Padeiro" />

        <Painel1/>

        <PlacarFutebol nomeTimeA="Time A" nomeTimeB="Time B" />
      </div>
    </div>
  )
}
export default App

function Saudacao() {
  return (
    <div style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '40px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(102, 126, 234, 0.15)',
      marginBottom: '48px',
      overflow: 'hidden'
    }}>
      <h2 style={{
        color: '#ffffff',
        fontSize: '32px',
        fontWeight: '700',
        margin: '0 0 12px 0',
        letterSpacing: '-0.5px'
      }}>Bem-vindo ao Site</h2>
      <p style={{
        color: '#e0e7ff',
        fontSize: '16px',
        fontWeight: '500',
        margin: '0',
        lineHeight: '1.6'
      }}>Aplicação elegante e profissional com componentes modernos</p>
    </div>
  );
}

function Perfil({ nome, cargo }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px', 
        border: '1px solid #e5e7eb',
        boxShadow: isHovered ? '0 10px 25px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.07)',
        transition: 'all 0.3s ease',
        transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        width: '64px',
        height: '64px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: '28px',
        fontWeight: '700',
        flexShrink: 0
      }}>
        {nome.charAt(0)}
      </div>
      <div style={{ flex: 1 }}>
        <h3 style={{
          color: '#1f2937', 
          fontSize: '18px',
          fontWeight: '700',
          margin: '0 0 4px 0'
        }}>{nome}</h3>
        <p style={{
          color: '#6b7280',
          fontSize: '14px',
          fontWeight: '500',
          margin: '0'
        }}>{cargo}</p>
      </div>
    </div>
  );
}

function Painel() {
  return (
    <div style={{
      background: '#ffffff',
      padding: '40px',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
      marginBottom: '40px'
    }}>
      <h2 style={{
        color: '#1f2937', 
        fontSize: '28px',
        fontWeight: '700',
        margin: '0 0 12px 0'
      }}>Painel de Controle</h2>
      <p style={{
        color: '#6b7280',
        fontSize: '16px',
        fontWeight: '500',
        margin: '0',
        lineHeight: '1.6'
      }}>Bem-vindo ao painel de controle da aplicação. Aqui você encontra todos os componentes principais do sistema.</p>
    </div>
  );
}

function Sobre({ Idade, Cidade, Profissao }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '24px',
      marginBottom: '48px'
    }}>
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        borderBottom: '3px solid #667eea'
      }}>
        <p style={{
          color: '#6b7280',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          margin: '0 0 8px 0'
        }}>Idade</p>
        <p style={{
          color: '#1f2937',
          fontSize: '20px',
          fontWeight: '700',
          margin: '0'
        }}>{Idade}</p>
      </div>
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        borderBottom: '3px solid #764ba2'
      }}>
        <p style={{
          color: '#6b7280',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          margin: '0 0 8px 0'
        }}>Cidade</p>
        <p style={{
          color: '#1f2937',
          fontSize: '20px',
          fontWeight: '700',
          margin: '0'
        }}>{Cidade}</p>
      </div>
      <div style={{
        background: '#ffffff',
        padding: '24px',
        borderRadius: '12px',
        border: '1px solid #e5e7eb',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
        borderBottom: '3px solid #2563eb'
      }}>
        <p style={{
          color: '#6b7280',
          fontSize: '12px',
          fontWeight: '600',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
          margin: '0 0 8px 0'
        }}>Profissão</p>
        <p style={{
          color: '#1f2937',
          fontSize: '20px',
          fontWeight: '700',
          margin: '0'
        }}>{Profissao}</p>
      </div>
    </div>
  );
}

function Painel1() {
  const [texto, setTexto] = useState('')
  
  return (
    <div style={{
      background: '#ffffff',
      padding: '32px',
      borderRadius: '12px',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
      marginBottom: '48px'
    }}>
      <h3 style={{
        color: '#1f2937',
        fontSize: '20px',
        fontWeight: '700',
        margin: '0 0 12px 0'
      }}>Enviar Mensagem</h3>
      <p style={{
        color: '#6b7280',
        fontSize: '14px',
        margin: '0 0 24px 0',
        lineHeight: '1.5'
      }}>Digite sua mensagem abaixo e veja-a aparecer em tempo real</p>
      
      <input 
        type="text" 
        placeholder='Digite sua mensagem aqui...' 
        onChange={(e) => setTexto(e.target.value)} 
        value={texto}
        style={{
          padding: '12px 16px',
          width: '100%',
          fontSize: '14px',
          background: '#f9fafb',
          border: '1px solid #e5e7eb',
          borderRadius: '8px',
          color: '#1f2937',
          fontFamily: 'inherit',
          transition: 'all 0.3s ease',
          boxSizing: 'border-box',
          outline: 'none'
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#667eea';
          e.target.style.boxShadow = '0 0 0 3px rgba(102, 126, 234, 0.1)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#e5e7eb';
          e.target.style.boxShadow = 'none';
        }}
      />
      
      {texto && (
        <div style={{
          marginTop: '24px',
          padding: '16px',
          background: '#f0f4ff',
          borderLeft: '4px solid #667eea',
          borderRadius: '6px',
          animation: 'fadeIn 0.3s ease'
        }}>
          <p style={{
            color: '#6b7280',
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            margin: '0 0 8px 0',
            letterSpacing: '0.5px'
          }}>Sua mensagem:</p>
          <p style={{
            color: '#1f2937',
            fontSize: '16px',
            fontWeight: '500',
            margin: '0',
            wordWrap: 'break-word'
          }}>{texto}</p>
        </div>
      )}
    </div>
  )
}

function PlacarFutebol({ nomeTimeA, nomeTimeB }) {
  // Criamos duas "caixinhas de memória" (States)
  const [golsA, setGolsA] = useState(0);
  const [golsB, setGolsB] = useState(0);

  const botaoEstilo = {
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '6px',
    background: '#2563eb',
    color: '#fff',
    cursor: 'pointer',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease',
    marginTop: '16px'
  };

  return (
    <div style={{
      background: '#ffffff',
      borderRadius: '12px',
      padding: '48px',
      textAlign: 'center',
      maxWidth: '600px',
      margin: '40px auto',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07), 0 10px 20px rgba(0, 0, 0, 0.04)',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
    }}>
      <h2 style={{
        color: '#1f2937',
        fontSize: '32px',
        marginBottom: '40px',
        letterSpacing: '-0.5px',
        fontWeight: '700'
      }}>
        Placar da Partida
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        gap: '32px',
        alignItems: 'center'
      }}>
        {/* Time A */}
        <div style={{
          padding: '24px',
          background: '#f9fafb',
          borderRadius: '10px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            color: '#374151',
            fontSize: '18px',
            margin: '0 0 16px 0',
            fontWeight: '600'
          }}>
            {nomeTimeA}
          </h3>
          <div style={{
            fontSize: '64px',
            fontWeight: '700',
            color: '#2563eb',
            margin: '16px 0',
            lineHeight: '1'
          }}>
            {golsA}
          </div>
          <button 
            onClick={() => setGolsA(golsA + 1)} 
            style={botaoEstilo}
            onMouseEnter={(e) => {
              e.target.style.background = '#1d4ed8';
              e.target.style.boxShadow = '0 10px 15px rgba(37, 99, 235, 0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#2563eb';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Gol
          </button>
        </div>

        {/* VS */}
        <div style={{
          fontSize: '28px',
          fontWeight: '700',
          color: '#9ca3af',
          textAlign: 'center'
        }}>
          x
        </div>

        {/* Time B */}
        <div style={{
          padding: '24px',
          background: '#f9fafb',
          borderRadius: '10px',
          border: '1px solid #e5e7eb'
        }}>
          <h3 style={{
            color: '#374151',
            fontSize: '18px',
            margin: '0 0 16px 0',
            fontWeight: '600'
          }}>
            {nomeTimeB}
          </h3>
          <div style={{
            fontSize: '64px',
            fontWeight: '700',
            color: '#dc2626',
            margin: '16px 0',
            lineHeight: '1'
          }}>
            {golsB}
          </div>
          <button 
            onClick={() => setGolsB(golsB + 1)} 
            style={{...botaoEstilo, background: '#dc2626'}}
            onMouseEnter={(e) => {
              e.target.style.background = '#b91c1c';
              e.target.style.boxShadow = '0 10px 15px rgba(220, 38, 38, 0.2)';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#dc2626';
              e.target.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
              e.target.style.transform = 'translateY(0)';
            }}
          >
            Gol
          </button>
        </div>
      </div>
    </div>
  );
}

