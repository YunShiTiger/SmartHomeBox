package Control;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import UdpServer.*;
public class SendControlData extends HttpServlet {

	public void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.setContentType("text/html;charset=utf-8");
		response.setCharacterEncoding("utf-8");
		request.setCharacterEncoding("utf-8");
		PrintWriter out = response.getWriter();
		
		SendGetUdp  sendGetUdp2 = new  SendGetUdp();
		switch(Integer.parseInt(request.getParameter("ControlData"))){
			case 131: 
				byte[] data131={0x68,(byte) 0xcc,0x13,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data131);
				System.out.println("灯带开");
				break;
			case 130: 
				byte[] data130={0x68,(byte) 0xcc,0x13,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data130);
				System.out.println("灯带关");
				break;
			case 121: 
				byte[] data121={0x68,(byte) 0xcc,0x12,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data121);
				System.out.println("空调开");
				break;
			case 120: 
				byte[] data120={0x68,(byte) 0xcc,0x12,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data120);
				System.out.println("空调关");
				break;
			case 521: 
				byte[] data521={0x68,(byte) 0xcc,0x52,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data521);
				System.out.println("卧室灯开");
				break;
			case 520: 
				byte[] data520={0x68,(byte) 0xcc,0x52,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data520);
				System.out.println("卧室灯关");
				break;
			case 511: 
				byte[] data511={0x68,(byte) 0xcc,0x51,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data511);
				System.out.println("厨房灯开");
				break;
			case 510: 
				byte[] data510={0x68,(byte) 0xcc,0x51,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data510);
				System.out.println("厨房灯关");
				break;
			case 101: 
				byte[] data101={0x68,(byte) 0xcc,0x10,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data101);
				System.out.println("厨房风扇开");
				break;
			case 100: 
				byte[] data100={0x68,(byte) 0xcc,0x10,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data100);
				System.out.println("厨房风扇关");
				break;
			case 501: 
				byte[] data501={0x68,(byte) 0xcc,0x50,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data501);
				System.out.println("卫生间灯开");
				break;
			case 500: 
				byte[] data500={0x68,(byte) 0xcc,0x50,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data500);
				System.out.println("卫生间灯关");
				break;
			case 111: 
				byte[] data111={0x68,(byte) 0xcc,0x11,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data111);
				System.out.println("卫生间风扇开");
				break;
			case 110: 
				byte[] data110={0x68,(byte) 0xcc,0x11,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data110);
				System.out.println("卫生间风扇关");
				break;
			case 141: 
				byte[] data141={0x68,(byte) 0xcc,0x14,0x01,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data141);
				System.out.println("阳台灯开");
				break;
			case 140: 
				byte[] data140={0x68,(byte) 0xcc,0x14,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data140);
				System.out.println("阳台灯关");
				break;
			case 201: 
				byte[] data201={0x68,(byte) 0xcc,0x20,0x60,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data201);
				System.out.println("窗帘开");
				break;
			case 200: 
				byte[] data200={0x68,(byte) 0xcc,0x20,0x06,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data200);
				System.out.println("窗帘关");
				break;
			case 1110: 
				byte[] data1110={0x68,(byte) 0xcc,0x6f,0x00,0x01,(byte)0xf1,0x78,0x68,(byte)0xaa,0x16};	
				sendGetUdp2.SendUdp(data1110);
				System.out.println("关电器设备");
				break;
			case 1111: 
				byte[] data1111={0x68,(byte) 0xcc,0x6f,0x01,0x01,(byte)0xf1,0x78,0x68,(byte)0xaa,0x16};	
				sendGetUdp2.SendUdp(data1111);
				System.out.println("电视开");
				break;
			case 611: 
				byte[] data611={0x68,(byte) 0xcc,0x61,0x00,0x01,(byte)0xf1,0x78,0x68,(byte)0xaa,0x16};	
				sendGetUdp2.SendUdp(data611);
				System.out.println("MV开");
				break;
			case 621: 
				byte[] data621={0x68,(byte) 0xcc,0x62,0x00,0x01,(byte)0xf1,0x78,0x68,(byte)0xaa,0x16};	
				sendGetUdp2.SendUdp(data621);
				System.out.println("音乐开");
				break;
			case 531: 
				byte[] data531={0x68,(byte) 0xcc,0x53,0x50,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data531);
				System.out.println("客厅可调灯开");
				break;
			case 530: 
				byte[] data530={0x68,(byte) 0xcc,0x53,0x00,0x05,0x05,0x05,0x05,0x05,0x16};	
				sendGetUdp2.SendUdp(data530);
				System.out.println("客厅可调灯关");
				break;
			default: break;
		}	
	}

	public void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		this.doGet(request, response);
	}

}
