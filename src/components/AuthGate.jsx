import { useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth, googleProvider } from "../firebase";

export default function AuthGate({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const handleGoogleSignIn = async () => {
    setError("");
    setProcessing(true);

    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      setError(
        err.code === "auth/popup-closed-by-user"
          ? "Sign-in was cancelled. Please try again."
          : "Google sign-in failed. Please try again."
      );
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  const handleSignOut = async () => {
    setError("");
    setProcessing(true);

    try {
      await signOut(auth);
    } catch (err) {
      setError("Could not sign out. Please try again.");
      console.error(err);
    } finally {
      setProcessing(false);
    }
  };

  if (loading) {
    return (
      <main className="auth-screen">
        <div className="auth-loading">
          <span className="auth-spinner" />
          <p>Checking authentication...</p>
        </div>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="auth-screen">
        <div className="auth-card">
          <div className="auth-icon" aria-hidden="true">
            🔐
          </div>

          <p className="auth-eyebrow">PRIVATE ACCESS</p>

          <h1>Akshaya's Portfolio</h1>

          <p className="auth-description">
            Welcome! Sign in with your Google account to access the portfolio.
          </p>

          <button
            type="button"
            className="google-button"
            onClick={handleGoogleSignIn}
            disabled={processing}
          >
            <span className="google-logo" aria-hidden="true">
              G
            </span>
            {processing ? "Signing in..." : "Continue with Google"}
          </button>

          {error && (
            <p className="auth-error" role="alert">
              {error}
            </p>
          )}

          <div className="auth-divider">
            <span />
            <span>SECURE ACCESS</span>
            <span />
          </div>

          <small>Powered by Firebase Authentication</small>
        </div>
      </main>
    );
  }

  return (
    <div className="authenticated-app">
      <div className="auth-toolbar">
        <div className="auth-user-status">
          <span className="auth-status-dot" />
          <span className="auth-user-text">
            <span className="auth-signed-label">Signed in as</span>
            <strong>{user.displayName || user.email}</strong>
          </span>
        </div>

        <button
          type="button"
          className="auth-signout-button"
          onClick={handleSignOut}
          disabled={processing}
        >
          {processing ? "Signing out..." : "Sign out"}
        </button>
      </div>

      {error && (
        <p className="auth-error auth-toolbar-error" role="alert">
          {error}
        </p>
      )}

      {children}
    </div>
  );
}