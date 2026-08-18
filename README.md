# Password Generator

Generador de contrasenas seguras y personalizables con React.

## Caracteristicas

- **Generacion segura**: Usa crypto.getRandomValues() para entropia real
- **Personalizacion**: Longitud, mayusculas, minusculas, numeros, simbolos
- **Indicador de fortaleza**: Muestra que tan segura es tu contrasena
- **Copiar con un clic**: Copia la contrasena al portapapeles
- **Historial**: Muestra las ultimas 5 contrasenas generadas
- **Responsive**: Funciona en cualquier dispositivo

## Stack Tecnico

- **React 18** - Biblioteca UI
- **Vite** - Build tool
- **CSS Modules** - Estilos encapsulados
- **Web Crypto API** - Generacion segura de numeros aleatorios

## Arquitectura

| Nivel | Descripcion | Ejemplos |
|-------|-------------|----------|
| **Atoms** | Elementos basicos | CopyButton, Slider, Toggle |
| **Molecules** | Combinaciones de atoms | PasswordDisplay, PasswordOptions |
| **Organisms** | Secciones completas | PasswordGenerator |
| **Templates** | Layouts de pagina | GeneratorTemplate |

## Instalacion

```bash
# Clonar
git clone https://github.com/JesusMelville/password-generator.git

# Instalar
cd password-generator
npm install

# Ejecutar
npm run dev
```

## Comandos

| Comando | Descripcion |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build para produccion |
| `npm run preview` | Vista previa del build |

## Seguridad

- Usa la Web Crypto API para generar numeros aleatorios criptograficamente seguros
- Nunca almacena ni transmite las contrasenas generadas
- El calculo de fortaleza considers longitud y diversidad de caracteres

## Licencia

MIT
