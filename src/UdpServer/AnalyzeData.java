package UdpServer;

import Database.MySqlHandle;

public  class AnalyzeData {
	
	public static float[] SensorData=new float[10];
	static MySqlHandle SaveInMySql = new MySqlHandle();
	
	public static void Analyze(byte[] B){
		int[] b= new int[14];
		
		for (int i = 0; i < b.length; i++) {  
			b[i]=B[i];
			if(b[i]<0){			
				b[i]=B[i]+256;	
			}
//			System.out.print(b[i]+",");
		}
		
		if(b[0]==104&&b[1]==221){ //MQ和SHT类型的传感器数据
			if(b[2]==3&&b[3]==5)
			{
				String x1=String.valueOf(b[10]); 
				String x2=String.valueOf(b[11]);
				String str=x1+"."+x2;
				SensorData[0]=Float.parseFloat(str);			
				System.out.println("厨房MQ2烟雾值是："+str+"ppm");
				SaveInMySql.insert("KitchenMQ2","smoke",str);
			}
			
			if(b[2]==2&&b[3]==4)
			{
				String x1=String.valueOf(b[10]); 
				String x2=String.valueOf(b[11]);
				String str=x1+"."+x2;
				SensorData[1]=Float.parseFloat(str);
				System.out.println("厨房MQ4烟雾值是："+str+"ppm");
				SaveInMySql.insert("KitchenMQ4","smoke",str);
				
			}
			
			if(b[2]==7&&b[3]==7)
			{
				String x1=String.valueOf(b[10]); 
				String x2=String.valueOf(b[11]);
				String str=x1+"."+x2;
				SensorData[2]=Float.parseFloat(str);
				System.out.println("卫生间MQ135烟雾值是："+str+"ppm");
				SaveInMySql.insert("WCMQ135","smoke",str);
			}
			
			if(b[2]==1&&b[3]==1)
			{
				String x1=String.valueOf(b[8]); 
				String x2=String.valueOf(b[9]);
				String x3=String.valueOf(b[10]); 
				String x4=String.valueOf(b[11]);
				String str1=x1+"."+x2; //温度值
				String str2=x3+"."+x4; //湿度值
				SensorData[3]=Float.parseFloat(str1);
				SensorData[4]=Float.parseFloat(str2);
				System.out.println("客厅SHT75的温度值是："+str1+"°C"
									+"客厅SHT75的湿度值是："+str2+"%rh");
				SaveInMySql.insert("KetingSHT75","temp",str1,"humidity",str2);
			}
			
			if(b[2]==1&&b[3]==2)
			{
				String x1=String.valueOf(b[8]); 
				String x2=String.valueOf(b[9]);
				String x3=String.valueOf(b[10]); 
				String x4=String.valueOf(b[11]);
				String str1=x1+"."+x2; //锟铰讹拷值
				String str2=x3+"."+x4; //湿锟斤拷值
				SensorData[5]=Float.parseFloat(str1);
				SensorData[6]=Float.parseFloat(str2);
				System.out.println("卧室SHT75的温度值是："+str1+"°C"
						+"卧室SHT75的湿度值是："+str2+"%rh");
				SaveInMySql.insert("BedroomSHT75","temp",str1,"humidity",str2);
			}
		}
		
		if(b[0]==104&&b[1]==170){ //门磁，红外，火焰的数据
			if(b[2]==11&&b[3]==1)
			{
				if(b[11]==0){
					System.out.println("门磁数据为00");
					SaveInMySql.insert("DoorData","doorflag","00");
				}
				if(b[11]==1){
					System.out.println("门磁数据为01");
					SaveInMySql.insert("DoorData","doorflag","01");
				}
				SensorData[7]=(float)(b[11]);
				
			}
			
			if(b[2]==6&&b[3]==8)
			{
				if(b[11]==0){
					System.out.println("红外数据为00");
					SaveInMySql.insert("HongwaiData","hongwaiflag","00");
				}
				if(b[11]==1){
					System.out.println("红外数据为01");
					SaveInMySql.insert("HongwaiData","hongwaiflag","01");
				}
				SensorData[8]=(float)(b[11]);
			}
			
			if(b[2]==9&&b[3]==1)
			{
				if(b[11]==0){
					System.out.println("火焰数据为00");
					SaveInMySql.insert("FireData","fireflag","00");
				}
				if(b[11]==1){
					System.out.println("火焰数据为01");
					SaveInMySql.insert("FireData","fireflag","01");
				}
				SensorData[9]=(float)(b[11]);
			}
		}
		
		
		
	}
	
	
	
	
}




