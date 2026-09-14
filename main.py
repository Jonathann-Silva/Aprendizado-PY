# importar as bibliotecas
import streamlit as st
import pandas as pd
import yfinance as yf

# criar as funçoes de carregamentos de dados 
    # Cotações do itau - ITUB4 - 2010 a 2026
@st.cache_data
def carregar_dados(empresa):
    dados_acao = yf.Ticker(empresa)
    cotacoes_acao = dados_acao.history(start="2010-01-01", end="2026-09-12")
    cotacoes_acao = cotacoes_acao[["Close"]]
    return cotacoes_acao

dados = carregar_dados("ITUB4.SA")
print(dados)
# preparar as visualizaçoes


# criar a interface do Streamlit
st.write("""
# Aplicativo de preço de ações
O grafico abaixo representa o preco de ações de 2010 ate 2026
""")

st.line_chart(dados)

st.write("""
# Fim do APP
""")