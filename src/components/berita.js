import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios';
import Footer from './footer';
import Navbar from './navbar';
import bgpw from '../assets/bgpw.svg';
import pkmimg from '../assets/pkmimg.png';
import beritaCard from './beritaCard.js';


const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;
`

const MainContent = styled.div`
flex: 1;
justify-content: center;`

const ProgramContainer = styled.div`
display: flex;
justify-content: center;
margin: 12px;`

const ProgramBox = styled.div`
background: url(${bgpw}) no-repeat;
border-radius: 30px;
width: 1262px;
height: 230px;
`
const DescContainer = styled.div`
display: flex;
justify-content: center;
column-gap: 12px;
`

const Img = styled.img`
width: 642px;
height: 489px;
border-radius:30;`

const DescBox = styled.div`
`

const Header = styled.p`
font-family: Raleway;
width: 599px;
height: 140px;
font-weight: bold;
font-size: 60px;
`

const Desc = styled.p`
font-family: Raleway;
width: 575px;
height: 213px;
font-weight: semi-bold;
font-size: 28px;`

const TextBox = styled.div`
padding-left: 32px;
font-family: Raleway;
font-size: 35px;
margin: -4px;
color: white;
`

const TextBox2 = styled(TextBox)`
font-size: 32px;
`
const ContentContainer = styled.div`
display: flex;
justify-content: center;`

const ContentBox = styled.div`
`
const HeaderContent = styled(Header)`
padding-right: 660px;
`


const Content = styled.div``


class Berita extends Component{
    constructor(props) {
        super(props);
        this.state = {
            berita: []
        };
    }

    componentDidMount (){
        axios
            .get('https://besm.herokuapp.com/berita')
                .then(res=>{
                    this.setState = ({
                        berita: res.data
                    })
                })
                    .catch(err=>{
                        console.log('Error from berita')
                    })
    }

    render(){
       const beritaList = () => {
            return this.state.berita.map((aBerita, k)=>{
                return <beritaCard berita={aBerita} k={k}/>
            })
        }

        return(
            <Container>
                <Navbar/>
                
                <MainContent>
                    <ProgramContainer>
                        <ProgramBox>
                            <TextBox>
                                <h1>Program</h1>
                            </TextBox>
                            <TextBox2>
                                <p>Pengabdian yang Dilaksanakan</p>
                            </TextBox2>
                        </ProgramBox> 
                    </ProgramContainer>
                    <br/>
                    {/* <DescContainer>
                        <Img src={pkmimg} />
                        <DescBox>
                            <Header>Pengabdian Kepada Masyarakat</Header>
                            <Desc>Salah satu Program yang rutin diselenggarakan oleh Universitas Sumatera Utara sebagai bagian dari Tri Dharma Perguruan Tinggi. Bertujuan untuk meningkatkan Ekonomi dengan Teknologi Tepat Guna</Desc>
                        </DescBox>
                    </DescContainer> */}
                    <ContentContainer>
                        <ContentBox>
                            <HeaderContent>Berita Utama</HeaderContent>
                           
                            <HeaderContent>Berita Terbaru</HeaderContent>
                            <Content>
                                {beritaList()}
                            </Content>
                        </ContentBox>
                    </ContentContainer>
                </MainContent>
                <Footer/>
            </Container>
        )
        
    }
}

export default Berita;