import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [taskText, setTaskText] = useState("");
const [priority, setPriority] = useState("Baixa");
const [taskList, setTaskList] = useState([]);
const [filter, setFilter] = useState("Todas");
const [searchText, setSearchText] = useState("");
const [editingId, setEditingId] = useState(null);
const [editingText, setEditingText] = useState("");


useEffect(() => {
const saved = localStorage.getItem("@taskflow_data");
if (saved) setTaskList(JSON.parse(saved));
}, []);

useEffect(() => {
localStorage.setItem("@taskflow_data", JSON.stringify(taskList));
}, [taskList]);

const addTask = (e) => {
e.preventDefault();
if (!taskText.trim()) return;

const newTask = {
id: crypto.randomUUID(),
text: taskText,
priority: priority,
completed: false,
createdAt: new Date().toLocaleDateString()
};

setTaskList([newTask, ...taskList]);
setTaskText("");
};

const toggleTask = (id) => {
setTaskList(taskList.map(t =>
t.id === id ? { ...t, completed: !t.completed } : t
));
};

const deleteTask = (id) => {
if (window.confirm("Tem certeza que deseja deletar esta tarefa?")) {
setTaskList(taskList.filter(t => t.id !== id));
}
};

const startEdit = (id, currentText) => {
setEditingId(id);
setEditingText(currentText);
};

const saveEdit = (id) => {
if (!editingText.trim()) {
alert("A descrição não pode estar vazia!");
return;
}
setTaskList(taskList.map(t => t.id === id ? { ...t, text: editingText } : t));
setEditingId(null);
setEditingText("");
};

const getPriorityValue = (priority) => {
const values = { "Alta": 3, "Média": 2, "Baixa": 1 };
return values[priority] || 0;
};

const filteredTasks = taskList
.filter(t => {
const matchesSearch = t.text.toLowerCase().includes(searchText.toLowerCase());
if (filter === "Pendentes") return matchesSearch && !t.completed;
if (filter === "Concluídas") return matchesSearch && t.completed;
return matchesSearch;
})
.sort((a, b) => getPriorityValue(b.priority) - getPriorityValue(a.priority));

return (
<div className="app-container">
<header>
<h1>TaskFlow</h1>
<p>Gestão de Produtividade</p>
</header>

<section className="form-section">
<form onSubmit={addTask}>
<input
value={taskText}
onChange={(e) => setTaskText(e.target.value)}
placeholder="Descrição da tarefa..."
/>
<select value={priority} onChange={(e) => setPriority(e.target.value)}>
<option value="Baixa">Baixa</option>
<option value="Média">Média</option>
<option value="Alta">Alta</option>
</select>
<button type="submit">Criar</button>
</form>
</section>

<section className="search-section">
<input
type="text"
value={searchText}
onChange={(e) => setSearchText(e.target.value)}
placeholder="Buscar tarefas..."
className="search-input"
/>
</section>

<section className="filter-section">
{["Todas", "Pendentes", "Concluídas"].map(f => (
<button
key={f}
className={filter === f ? "active" : ""}
onClick={() => setFilter(f)}
>
{f}
</button>
))}
</section>

<main className="task-grid">
{filteredTasks.map(item => (
<div key={item.id} className={`task-card ${item.priority.toLowerCase()} ${item.completed
? 'done' : ''}`}>
<div className="task-content">
{editingId === item.id ? (
<div className="edit-mode">
<input
type="text"
value={editingText}
onChange={(e) => setEditingText(e.target.value)}
autoFocus
/>
<div className="edit-buttons">
<button onClick={() => saveEdit(item.id)} className="save-btn">Salvar</button>
<button onClick={() => setEditingId(null)} className="cancel-btn">Cancelar</button>
</div>
</div>
) : (
<>
<h3>{item.text}</h3>
<span>Prioridade: {item.priority}</span>
<small>Criada em: {item.createdAt}</small>
</>
)}
</div>
<div className="task-actions">
{editingId !== item.id && (
<>
<button onClick={() => toggleTask(item.id)}>
{item.completed ? "Reabrir" : "Concluir"}
</button>
<button onClick={() => startEdit(item.id, item.text)} className="edit-btn">
Editar
</button>
<button onClick={() => deleteTask(item.id)} className="delete">
Remover
</button>
</>
)}
</div>
</div>
))}
</main>
</div>
);
}


export default App;
