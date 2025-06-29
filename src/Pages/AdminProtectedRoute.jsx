import { useEffect, useState } from "react";
import { supabase } from "../supabaseClient";
import { useNavigate } from "react-router-dom";

const AdminProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAdmin = async () => {
      const { data } = await supabase.auth.getUser();
      if (data?.user?.email !== "devsphere.uz@gmail.com") {
        navigate("/");
      } else {
        setLoading(false);
      }
    };
    checkAdmin();
  }, []);

  return loading ? null : children;
};

export default AdminProtectedRoute;