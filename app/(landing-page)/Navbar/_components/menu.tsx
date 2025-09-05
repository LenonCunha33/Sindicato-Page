"use client";

import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Logo from "./logo";

const components: { title: string; description: string }[] = [
  {
    title: "Dra. Adriane Leal Muniz",

    description:
      "Mais de 30 Atendimento Odontológicos , Limpeza , Canal , Extração de siso...",
  },
  {
    title: "Medicina do Trabalho",

    description:
      "Consultas Médicas , Autorizações em: - Sede do Sindicato e SubSede do...",
  },
  {
    title: "Escola Sesi",

    description:
      "Acesso a Bolsas na Escola Sesi , Pacotes de Academia , Serviços Odontológicos...",
  },
  {
    title: "VRMED - Clínica Médica",

    description: "Cliníca Médica e Odontológica , Consultas Médicas Cardiologista, Nutricionista...",
  },
  {
    title: "Dra. Claudia Gioseffi",

    description:
      "Atendimento Odontológico Gratuito Para Associados e Dependentes...",
  },
  {
    title: "Fasf - Faculdade Sul Fluminense",

    description:
      "Faculdade Sul Fluminense , Confira Cursos ue podem Chegar Aé 50% de...",
  },
];

export function NavigationMenuBar() {
  return (
    <NavigationMenu>
      <NavigationMenuList className="hidden md:flex md:space-x-4">
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sindicato</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <Logo />

                    <div className="mb-2 mt-4 text-lg font-medium">
                      Sindicato dos Trabalhadores
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Há 79 Anos Construindo o Progresso da Nossa Região!
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/diretoria-sind.industria.civil" title="Diretoria">
                Veja Mais Sobre Toda Nossa Diretoria. Executiva a Suplentes
              </ListItem>
              <ListItem href="/historia-sind.trabalhadores.industria.civil" title="História">
                Em 24 de março de 1946 foi fundado o "Sindicato dos Trabalhadores na...
              </ListItem>
              <ListItem href="/associados-sind.trabalhadores.industria.civil" title="Associados">
                Veja os documentos necessários para retirar a carteirinha e ter...
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Convênios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem key={component.title} title={component.title}>
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem

        
        >
          <Link href="/contato-sind.trabalhadores.industria.civil" legacyBehavior passHref>
          <div>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Contato
            </NavigationMenuLink>
          </div>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
