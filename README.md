# Counter App en React avec TypeScript

Ce projet est un compteur simple réalisé en React et TypeScript. Il utilise le hook `useState` pour gérer l'état du compteur.

## Déclaration du Composant Counter :

const Counter: React.FC = () => { ... }

    React.FC (React Functional Component) est utilisé pour typer le composant comme fonctionnel.

Utilisation de useState :

const [count, setCount] = useState<number>(0);

    count : représente la valeur actuelle du compteur.
    setCount : fonction utilisée pour mettre à jour la valeur de count.
    useState<number>(0) : initialise count à 0 et indique que le type attendu est un nombre (number).

## Création des Fonctions :

    increment : ajoute 1 à la valeur actuelle de count.

const increment = () => setCount((prevCount) => prevCount + 1);

decrement : soustrait 1 à la valeur actuelle de count.

const decrement = () => setCount((prevCount) => prevCount - 1);

reset : réinitialise la valeur de count à 0.

    const reset = () => setCount(0);

## Structure HTML et Styles :

return (
  <div style={{ textAlign: "center", marginTop: "50px" }}>
    <h1>Counter: {count}</h1>
    <button onClick={increment}>Increment</button>
    <button onClick={decrement} style={{ margin: "0 10px" }}>Decrement</button>
    <button onClick={reset}>Reset</button>
  </div>
);

    style : ajoute des styles en ligne.
    Affiche la valeur de count dans un titre <h1>.
    Chaque bouton exécute une fonction spécifique (increment, decrement, reset) lorsqu'il est cliqué.

## Exportation du Composant :

export default Counter;

    Rend le composant Counter disponible pour d'autres fichiers.

/////////////////////*********************PArtie Css 

## Explication du Code
Fichier 1: StyleCompo.tsx

    Importation des Modules et Composant Externe :

import React from "react";
import StyledText from "./StyledText";

    React est nécessaire pour définir le composant React.
    StyledText est importé depuis un fichier séparé pour réutiliser un composant stylisé.

## Définition du Type TulipColor :

type TulipColor = "red" | "yellow" | "pink" | "purple";

    Définit une union de chaînes, représentant les couleurs autorisées inspirées de la méthode Tulip.

Déclaration du Composant StyleCompo :

const StyleCompo: React.FC = () => { ... }

    StyleCompo est un composant fonctionnel affichant plusieurs instances du composant StyledText avec différentes couleurs.

Rendu JSX :

    return (
      <div style={{ padding: "20px" }}>
        <h1>Tulip Method - Passing Styles as Props</h1>
        <StyledText color="red">This text is red like a tulip.</StyledText>
        <StyledText color="yellow">This text is yellow like a tulip.</StyledText>
        <StyledText color="pink">This text is pink like a tulip.</StyledText>
        <StyledText color="purple">This text is purple like a tulip.</StyledText>
      </div>
    );

        Chaque instance de StyledText reçoit une couleur via des props, modifiant dynamiquement le style du texte affiché.

## Fichier 2: StyledText.tsx

    Définition du Type TulipColor :
        Identique à celle de StyleCompo :

    type TulipColor = "red" | "yellow" | "pink" | "purple";

Interface pour les Props du Composant :

interface StyledTextProps {
  color: TulipColor;
  children: React.ReactNode;
}

    color: Représente une couleur autorisée parmi les valeurs de TulipColor.
    children: Contenu du texte passé au composant.

## Déclaration du Composant StyledText :

const StyledText: React.FC<StyledTextProps> = ({ color, children }) => { ... }

    StyledText est un composant réutilisable acceptant des props pour personnaliser le style.

Style Dynamique :

const style: React.CSSProperties = {
  color: color,
  fontSize: "18px",
  fontWeight: "bold",
};

    Un objet de style est créé avec la couleur définie par la prop color.

## Rendu JSX :

return <p style={style}>{children}</p>;

    Le texte enfant (children) est affiché avec le style défini dynamiquement.

    /*********************************Axios
    Explication du Code
Composant USer

   ## Importation des Modules et Hooks :

import React, { useEffect, useState } from "react";
import axios from "axios";
import UserCard from "./UserCard";

    useEffect : Exécute une fonction après le rendu du composant.
    useState : Gère l'état local du composant.
    axios : Librairie pour effectuer des appels API.
    UserCard : Composant pour afficher les informations d'un utilisateur.

## Définition de l'Interface User :

interface User {
  id: number;
  name: string;
  email: string;
}

## Définit le type d'objet représentant un utilisateur, avec les propriétés id, name et email.

## Déclaration du Composant USer :

const USer: React.FC = () => { ... }

    USer est un composant fonctionnel responsable de récupérer et d'afficher la liste des utilisateurs.

## Gestion de l'État Local :

const [users, setUsers] = useState<User[]>([]);

    Initialise un tableau vide d'utilisateurs.

## Récupération des Données avec useEffect :

useEffect(() => {
  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  fetchUsers();
}, []);

    Utilise axios pour faire une requête GET vers une API factice (jsonplaceholder.typicode.com).
    Met à jour l'état avec les données récupérées en utilisant setUsers.
    L'effet est déclenché uniquement au montage du composant ([] dans useEffect).

Rendu JSX :

    return (
      <div>
        <h1>User List</h1>
        <div>
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );

        Parcourt la liste des utilisateurs avec map et rend un composant UserCard pour chaque utilisateur.
        Passe les données de chaque utilisateur à UserCard via les props.

## Composant UserCard

    Importation de React :

import React from "react";

## Définition des Interfaces :

interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
}

    User: Définit le format des données utilisateur.
    UserCardProps: Définit les props que le composant UserCard attend, ici une prop user de type User.

## Déclaration du Composant UserCard :

const UserCard: React.FC<UserCardProps> = ({ user }) => { ... }

    Affiche les informations d'un utilisateur individuel.

Rendu JSX :

return (
  <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
    <h2>{user.name}</h2>
    <p>Email: {user.email}</p>
  </div>
);

    Affiche le nom et l'email d'un utilisateur dans un conteneur stylisé.