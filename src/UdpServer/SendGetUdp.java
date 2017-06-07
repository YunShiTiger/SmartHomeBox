package UdpServer;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.net.DatagramPacket;
import java.net.DatagramSocket;
import java.net.InetSocketAddress;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;
import javax.servlet.http.HttpServlet;

import org.junit.Test;

public class SendGetUdp implements ServletContextListener{
		
	public static void main(String[] args)throws Exception {

	}
	
	/**************************获取UDP数据************************/
	 public byte[] GetUdp(){
		byte[] b = new byte[14];
		try{
			DatagramSocket ds = new DatagramSocket(8088);
			DatagramPacket d = new DatagramPacket(b,b.length);
//			System.out.println("GetUdp");
			ds.receive(d);	
			ds.close();
			//Thread.sleep(100);
		}catch(Exception e){
			e.printStackTrace();
		}
		return b;
	}
	
	/*********************发送UDP数据***************/
	public void SendUdp(byte[] x){
		byte[] buf=x;
		DatagramSocket ds = null;
		
		try{
			ds = new DatagramSocket(8099);
//			DatagramPacket dp = new DatagramPacket(buf,0,buf.length,
//					new InetSocketAddress("192.168.1.105",6530));

			DatagramPacket dp = new DatagramPacket(buf,0,buf.length,
					new InetSocketAddress("192.168.253.7",8087));
			ds.send(dp);  
			ds.close();  
			Thread.sleep(100);
			
		}catch(Exception e){
			e.printStackTrace();
		}
	}

	public void contextDestroyed(ServletContextEvent arg0) {
		System.out.println("/////////destory..");
	}


	public void contextInitialized(ServletContextEvent arg0) {
		new Thread(new Runnable() {
			
			public void run() {
				SendGetUdp  sendGetUdp = new  SendGetUdp();
				AnalyzeData analyzeData =new AnalyzeData();
				while(true){
					byte[] b=sendGetUdp.GetUdp();
					analyzeData.Analyze(b);
//					System.out.println("send:"+String.valueOf(analyzeData.SensorData[0]));
				}
			}
		}).start();
	}
	
}
