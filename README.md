# Aplicación de Pronóstico de Clima y Monitoreo de Colectivos

Esta aplicación ofrece información detallada sobre el clima en Córdoba, Argentina (ubicación predeterminada) o en la localidad deseada. Además, permite realizar un seguimiento en tiempo real de la ubicación de los colectivos en Buenos Aires. La aplicación combina datos de APIs de pronóstico de clima y seguimiento de colectivos para brindar una experiencia informativa y útil.

## Contenido

- [Vista General](#vista-general)
- [Instrucciones de Uso](#instrucciones-de-uso)
- [Bugs/Problemas Conocidos](#bugsproblemas-conocidos)
- [Créditos](#créditos)

## Vista General

La aplicación consta de varios componentes, entre ellos:

- **App:** Es el componente principal que gestiona la recuperación de datos del clima y de colectivos. Muestra dichos datos junto con componentes relacionados y la pantalla de carga.

- **Clima:** Muestra información actual sobre el clima de Córdoba(predeterminado) o localidad deseada, incluyendo temperatura actual, humedad, velocidad del viento, dirección del viento, precipitación, índice UV y más. Además, proporciona un pronóstico de temperatura máxima y mínima para el día actual y temperatura por hora.

- **Transporte:** Permite seleccionar un destino y muestra en tiempo real la ubicación de los colectivos a ese destino en un mapa. También muestra información detallada sobre la línea seleccionada.

- **Loading:** Un componente que se muestra durante la carga de datos.

## Instrucciones de Uso

### Dashboard de Clima

El dashboard de clima proporciona información detallada sobre el pronóstico del tiempo para la ciudad que elijas:

1. Usa el campo de búsqueda para encontrar información meteorológica para cualquier ubicación en Córdoba o cualquier ciudad.

2. Para buscar el pronóstico de una localidad específica, ingresa el nombre de la localidad en el campo de búsqueda y presiona Enter para iniciar la búsqueda.

### Mapa de Colectivos

El mapa de colectivos te permite seleccionar un destino y ver la ubicación de los colectivos que se dirigen hacia allí en tiempo real. Sigue estos pasos:

1. Puedes usar menu desplegable en "Colectivos" para ver todos los destinos disponibles.

2. Ingresa tu destino deseado y se mostrará en el menú desplegable.

3. Al seleccionar un destino, se mostrarán los colectivos disponibles en esa ruta.

4. Puedes seleccionar un colectivo para ver su línea o agencia, además de otra información. 

## Bugs/Problemas Conocidos

A continuación, se detallan algunos problemas conocidos que los usuarios pueden encontrar al utilizar la aplicación:

### Error de Búsqueda al Ingresar un País en el Campo de Búsqueda de Clima

- **Descripción:** Al intentar buscar un país en el campo de búsqueda de Clima, se produce un error en la solicitud a la API y no se obtienen datos de pronóstico.
- **Estado:** Solucionado

- **Descripción:** Se ha intentado implementar un filtro para evitar la búsqueda de países en el campo de búsqueda de Clima, pero la búsqueda sigue produciendo un error en la solicitud a la API.
- **Estado:** Solucionado

## Créditos

Esta aplicación utiliza datos de las siguientes fuentes:

### API de Transporte de Buenos Aires

- **Sitio Web:** [Buenos Aires Desarrollo Urbano](https://buenosaires.gob.ar/desarrollourbano/transporte/apitransporte)

### Open Meteo

- **Sitio Web:** [Open Meteo](https://open-meteo.com/en/docs)