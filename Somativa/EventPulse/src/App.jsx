import React, { useState, useEffect } from 'react'
import './App.css'
import faviconImg from '../../../Somativa/IMG/favicon_css.png'
import pageBorderImg from '../../../Somativa/IMG/focabanana.png'
import sideImgOne from '../../../Somativa/IMG/image-removebg-preview (1).png'
import sideImgTwo from '../../../Somativa/IMG/image-removebg-preview (2).png'
import sideImgThree from '../../../Somativa/IMG/image-removebg-preview.png'

function App() {
  const [eventTitle, setEventTitle] = useState("")
  const [eventType, setEventType] = useState("Palestra")
  const [eventVagas, setEventVagas] = useState(10)
  const [eventList, setEventList] = useState([])
  const [filter, setFilter] = useState("Todos")
  const [searchTerm, setSearchTerm] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [editingId, setEditingId] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem("@eventpulse_data")
    if (saved) setEventList(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem("@eventpulse_data", JSON.stringify(eventList))
  }, [eventList])

  const resetForm = () => {
    setEventTitle("")
    setEventType("Palestra")
    setEventVagas(10)
    setEditingId(null)
  }

  const saveEvent = (e) => {
    e.preventDefault()
    if (!eventTitle.trim()) return

    if (editingId) {
      setEventList(eventList.map(evt => {
        if (evt.id === editingId) {
          return {
            ...evt,
            title: eventTitle,
            type: eventType,
            vagas: eventVagas
          }
        }

        return evt
      }))
      resetForm()
      return
    }

    const newEvent = {
      id: crypto.randomUUID(),
      title: eventTitle,
      type: eventType,
      status: "Agendado",
      date: new Date().toLocaleDateString(),
      vagas: eventVagas
    }

    setEventList([newEvent, ...eventList])
    resetForm()
  }

  const toggleStatus = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id) {
        const nextStatus = evt.status === "Agendado" ? "Em Andamento" :
          evt.status === "Em Andamento" ? "Encerrado" : "Agendado"
        return { ...evt, status: nextStatus }
      }
      return evt
    }))
  }

  const deleteEvent = (id) => {
    if (editingId === id) resetForm()
    setEventList(eventList.filter(evt => evt.id !== id))
  }

  const editEvent = (event) => {
    setEventTitle(event.title)
    setEventType(event.type)
    setEventVagas(event.vagas)
    setEditingId(event.id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const inscreverAluno = (id) => {
    setEventList(eventList.map(evt => {
      if (evt.id === id && evt.vagas > 0) {
        return { ...evt, vagas: evt.vagas - 1 }
      }
      return evt
    }))
  }

  const limparTudo = () => {
    if (window.confirm("Tem certeza que deseja limpar o cronograma?")) {
      setEventList([])
      localStorage.removeItem("@eventpulse_data")
    }
  }

  let filtered = eventList.filter(evt => {
    if (filter === "Agendados") return evt.status === "Agendado"
    if (filter === "Em Andamento") return evt.status === "Em Andamento"
    if (filter === "Encerrados") return evt.status === "Encerrado"
    return true
  })

  filtered = filtered.filter(evt =>
    evt.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  filtered.sort((a, b) => {
    if (a.type === "Workshop" && b.type !== "Workshop") return -1
    if (a.type !== "Workshop" && b.type === "Workshop") return 1
    return 0
  })

  const sideImages = [pageBorderImg, sideImgOne, sideImgTwo, sideImgThree]
  const sideRows = Array.from({ length: 12 })

  return (
    <div className="app-container">
      <div className="side-rail side-rail-left" aria-hidden="true">
        {sideRows.map((_, rowIndex) => (
          <div className="side-rail-row" key={`left-${rowIndex}`}>
            {sideImages.map((image, imageIndex) => (
              <img src={image} alt="" key={`left-${rowIndex}-${imageIndex}`} />
            ))}
          </div>
        ))}
      </div>

      <div className="side-rail side-rail-right" aria-hidden="true">
        {sideRows.map((_, rowIndex) => (
          <div className="side-rail-row" key={`right-${rowIndex}`}>
            {sideImages.map((image, imageIndex) => (
              <img src={image} alt="" key={`right-${rowIndex}-${imageIndex}`} />
            ))}
          </div>
        ))}
      </div>

      <header>
        <h1>EventPulse</h1>
        <p>Gestão de Eventos Acadêmicos</p>
        <button onClick={limparTudo} className="clear-btn">
          Limpar Cronograma
        </button>
      </header>

      <section className="form-section">
        <form onSubmit={saveEvent}>
          <input
            value={eventTitle}
            onChange={(e) => setEventTitle(e.target.value)}
            placeholder="Nome do evento..."
          />
          <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
            <option value="Palestra">Palestra</option>
            <option value="Workshop">Workshop</option>
            <option value="Painel">Painel</option>
          </select>
          <select value={eventVagas} onChange={(e) => setEventVagas(Number(e.target.value))}>
            <option value={10}>10 vagas</option>
            <option value={30}>30 vagas</option>
            <option value={50}>50 vagas</option>
          </select>
          <button type="submit">{editingId ? "Salvar" : "Agendar"}</button>
          {editingId && (
            <button type="button" className="cancel-edit-btn" onClick={resetForm}>
              Cancelar
            </button>
          )}
        </form>
      </section>

      <section className="search-section">
        <input
          type="text"
          placeholder="Pesquise por eventos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </section>

      <section className="filter-section">
        {["Todos", "Agendados", "Em Andamento", "Encerrados"].map(f => (
          <button
            key={f}
            className={filter === f ? "active" : ""}
            onClick={() => setFilter(f)}
          >
            {f}
          </button>
        ))}
      </section>

      <main className="event-grid">
        {filtered.length === 0 ? (
          <div className="empty">
            <p>Nenhum evento encontrado</p>
            <small>Comece criando seu primeiro evento</small>
          </div>
        ) : (
          filtered.map(item => (
            <div
              key={item.id}
              className={`event-card ${item.type.toLowerCase()} ${item.status.toLowerCase().replace(" ", "-")}`}
            >
              <div className="event-header">
                <span className="event-type-badge">{item.type}</span>
                <span className="event-status-badge">{item.status}</span>
              </div>
              <div className="event-content">
                <h3>{item.title}</h3>
                <div className="event-details">
                  <p><strong>Tipo:</strong> {item.type}</p>
                  <p><strong>Vagas:</strong> <span className="vagas-highlight">{item.vagas}</span></p>
                  <small>{item.date}</small>
                </div>
              </div>
              <div className="event-actions">
                <button onClick={() => toggleStatus(item.id)} className="status-btn" title="Mudar status do evento">
                  {item.status === "Agendado" ? "Iniciar" : 
                   item.status === "Em Andamento" ? "Encerrar" : "Reiniciar"}
                </button>
                <button onClick={() => editEvent(item)} className="edit-btn" title="Editar evento">
                  Editar
                </button>
                <button
                  onClick={() => inscreverAluno(item.id)}
                  className="inscricao-btn"
                  disabled={item.vagas === 0}
                  title="Inscrever um aluno no evento"
                >
                  {item.vagas === 0 ? "Esgotado" : `Inscrever (${item.vagas})`}
                </button>
                <button onClick={() => deleteEvent(item.id)} className="delete-btn" title="Remover evento">
                  Remover
                </button>
              </div>
            </div>
          ))
        )}
      </main>

      <button className="fab-btn" onClick={() => setShowModal(true)} title="Ver alterações do design">
        <img src={faviconImg} alt="Alterações CSS" className="fab-icon" />
      </button>

      {showModal && (
        <div className="modal-backdrop" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>✕</button>
            <h2>Alterações CSS Implementadas</h2>
            <ul className="changes-list">
              <li>
                <strong>Design System Profissional:</strong> Sistema estruturado com variáveis CSS para cores, espaçamento, tipografia e sombras, totalmente escalável e mantível.
              </li>
              <li>
                <strong>Gradientes e Animações:</strong> Gradientes elegantes nos títulos e botões, backdrop-filter blur no modal, animações de entrada suave e transições em interações.
              </li>
              <li>
                <strong>Responsividade Completa:</strong> Adaptação perfeita em desktop, tablet e mobile com breakpoints em 1024px, 768px e 480px, preservando usabilidade.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
