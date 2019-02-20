
package bolicheml;

public class Reglas {
   private final int[]tiros = new int [21];
   private int currentRoll;
    private int FRAME_SIZE;
   
   public void tiro/*tiro*/(int pins){
       tiros[currentRoll++] = pins;
   }
   
   public int puntos(){
   int puntos/*puntos*/ = 0;
   int indice/*indice = frameIndex*/ = 0;
   for (int frame = 0;frame < FRAME_SIZE;frame++){
       if(isStrike(indice)){
       puntos += 10 + strikeBonus(indice);
       indice++;
       }else if(isSpare(indice)){
          puntos += 10 + spareBonus(indice);
          indice += 2;
       } else {
           puntos += sumOfAllIFrame(indice);
           indice += 2;
       }
       indice +=2;
   }
   return puntos;
   }
   
 private int strikeBonus(int indice){
 return tiros[indice + 1] + spareBonus(indice);
 }
   
private int spareBonus(int indice){
return tiros[indice + 2];      
}
   
private int sumOfAllIFrame(int indice){
    return tiros[indice] + tiros[indice + 1]; 
}

private boolean isStrike(int indice){
return tiros[indice] == 10;
}
 
private boolean isSpare(int indice){
return tiros[indice] + tiros[indice + 1] == 10;
}

}


   
