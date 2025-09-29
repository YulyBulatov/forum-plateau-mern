import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/api";

export default function Messages() {
  const { topicId } = useParams();
  const [messages, setMessages] = useState([]);
  const [texte, setTexte] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await api.get(`/messages/topic/${topicId}`);
        setMessages(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMessages();
  }, [topicId]);

  const handleSend = async (e) => {
    e.preventDefault();
    const bodyText = texte?.trim();
    if (!bodyText) return;

    try {
      const payload = { contenu: bodyText, topic: topicId };  
      await api.post("/messages", payload);
      setTexte("");
      const res = await api.get(`/messages/topic/${topicId}`);
      setMessages(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Messages</h2>
      <ul>
        {messages.map(m => (
          <li key={m._id}>
            <b>{m.auteur?.username}:</b> {m.contenu}
          </li>
        ))}
      </ul>

      {user && (
        <form onSubmit={handleSend}>
          <input
            placeholder="Write a message"
            value={texte}
            onChange={e => setTexte(e.target.value)}
          />
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
}
