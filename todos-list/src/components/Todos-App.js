import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import {useTodos} from "../hooks/useTodos";
import {ListContext} from "../providers/list-context";

export function TodosApp({appName}) {
  const todoApi = useTodos();

  return (
        <ListContext.Provider value = {todoApi}>
            <section className="todoapp">
            <Header title={appName} />
            <Main/>
            <Footer/>
            </section>
        </ListContext.Provider>
  );
}