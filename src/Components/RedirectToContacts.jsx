import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function RedirectToContacts() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/contacts");
  }, [navigate]);

  return null;
}

export default RedirectToContacts;