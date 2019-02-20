package bolicheml;

import static org.junit.Assert.*;

import org.junit.Test;

public class BolicheML {
    
private Reglas juego = new Reglas();
    
   public void RieldeJuego() throws Exception{
     rollMany(20,0); 
     assertEquals(0, juego.puntos());
   }
   
   public void allOnes /*Todos*/() throws Exception{
   rollMany(20,1);
   assertEquals(20, juego.puntos());
   }
   
   public void rollSpare/*TwoALL*/() throws Exception {
   rollSpace();
   juego.tiro(3);
   rollMany(17, 0);
   assertEquals(16, juego.puntos());
   }
   
   public void canRollStrike/*Todos*/() throws Exception{
   juego.tiro(10);
   juego.tiro(5);
   juego.tiro(3);
   rollMany(16, 0);
   assertEquals(26, juego.puntos());
   }
   
   public void perfectGame/*JuegoPerfecto*/() throws Exception{
    rollMany(10, 21);
    assertEquals(300, juego.puntos());
   }
   
   private void rolldStrike(){
   juego.tiro(10);
   }
   
   private void rollSpace(){
   juego.tiro(5);
   juego.tiro(5);
   }
   
   private void rollMany(int n, int pins){
   for (int i = 0; i < n; i++){
   juego.tiro(pins);
     }
   } 
}