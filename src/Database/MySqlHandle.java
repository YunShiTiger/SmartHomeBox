package Database;

import java.sql.*;

public class MySqlHandle {

	private Connection ct = null;
	PreparedStatement ps = null;
	ResultSet rs = null;
	
	//连接数据库
	void connSQL(){
		String url = "jdbc:mysql://localhost:3306/duliang?useUnicode=true&amp;characterEncoding=UTF-8";  
        String username = "root";  
        String password = "";    //数据库密码
        
        try {
        	 Class.forName("com.mysql.jdbc.Driver" );   
             ct = DriverManager.getConnection( url,username, password );  
		} 
      //捕获加载驱动程序异常 
        catch (ClassNotFoundException cnfex) {
			System.err.println(  
            "装载 JDBC/ODBC 驱动程序失败。" );  
            cnfex.printStackTrace(); 
		}
     //捕获连接数据库异常  
        catch ( SQLException sqlex ) {  
            System.err.println( "无法连接数据库" );  
            sqlex.printStackTrace();   
        }   
        
	}
	
	
	//断开MySQL数据库
	 void deconnSQL() {  
        try {	
			//关闭
			if(rs != null){
				try{			
					rs.close();	
				}catch(Exception e){
					System.out.println(e);
				}
				rs = null;
			}
			if(ps != null){
				try{			
					ps.close();	
				}catch(Exception e){
					System.out.println(e);
				}
				ps = null;
			}
			if(ct != null){
				try{			
					ct.close();	
				}catch(Exception e){
					System.out.println(e);
				}
				ct = null;
			}	
		} catch (Exception e) {
			System.out.println("关闭数据库问题 ：");  
            e.printStackTrace(); 
		}
	 }  
	
	// 查询数据库  
    ResultSet selectSQL(String sql) {  
        ResultSet rs = null;  
        try {  
            ps = ct.prepareStatement(sql);  
            rs = ps.executeQuery(sql);  
        } catch (SQLException e) {  
            e.printStackTrace();  
        }  
        return rs;  
    }  
	
    
    // 插入数据库  
    boolean insertSQL(String sql) {  
        try {  
            ps = ct.prepareStatement(sql);  
            ps.executeUpdate();  
            return true;  
        } catch (SQLException e) {  
            System.out.println("插入数据库时出错：");  
            e.printStackTrace();  
        } catch (Exception e) {  
            System.out.println("插入时出错：");  
            e.printStackTrace();  
        }  
        return false;  
    } 
    
     //修改数据库  
    boolean updateSQL(String sql) {  
        try {  
            ps = ct.prepareStatement(sql);  
            ps.executeUpdate();  
            return true;  
        } catch (SQLException e) {  
            System.out.println("修改数据库时出错：");  
            e.printStackTrace();  
        } catch (Exception e) {  
            System.out.println("修改时出错：");  
            e.printStackTrace();  
        }  
        return false;  
    }  
    
    //删除数据库内容  
    boolean deleteSQL(String sql) {  
        try {  
            ps = ct.prepareStatement(sql);  
            ps.executeUpdate();  
            return true;  
        } catch (SQLException e) {  
            System.out.println("删除数据库时出错：");  
            e.printStackTrace();  
        } catch (Exception e) {  
            System.out.println("删除时出错：");  
            e.printStackTrace();  
        }  
        return false;  
    }  
    
	//显示数据库内容
    void layoutStyle2(ResultSet rs) {  
        System.out.println("-----------------");  
        System.out.println("数据库执行结果如下所示:");  
        System.out.println("-----------------");   
        try {  
        	while(rs.next()){
				System.out.println
				(rs.getInt("id")+" 名字="+rs.getString("kitchenMQ2"));
				
			} 
        } catch (SQLException e) {  
            System.out.println("显示时数据库出错。");  
            e.printStackTrace();  
        } catch (Exception e) {  
            System.out.println("显示出错。");  
            e.printStackTrace();  
        }  
    } 
    
    //更新表的数据
    public void update(String item,int id,String data) { 
    	MySqlHandle mySqlHandle = new MySqlHandle();
    	mySqlHandle.connSQL();
    	
    	String selectSQL ="select * from SensorData";
		String updateSQL = "update SensorData set " + item + "=" + data+" where id="+id+";";
		
		//修改
	   if (mySqlHandle.updateSQL(updateSQL) == true) {  
           System.out.println("update successfully");  
           ResultSet resultSet = mySqlHandle.selectSQL(selectSQL);     
           mySqlHandle.layoutStyle2(resultSet);  
       } 
		
		mySqlHandle.deconnSQL();
    }
    
    //在数据库表里插入一组数据
    public void insert(String TableName,String item,String data) { 
    	MySqlHandle mySqlHandle = new MySqlHandle();
    	mySqlHandle.connSQL();
    	
//    	String selectSQL ="select * from SensorData";
		String insertSQL = "insert into "+ TableName +" (" +item+",time"    +") "+" values(" +data+",now()" +")"   +";";
    	
    	//增加
 	   if (mySqlHandle.insertSQL(insertSQL) == true) {  
 		   System.out.println("insert "+TableName+"数据表"+ " successfully"); 
//             ResultSet resultSet = mySqlHandle.selectSQL(selectSQL);  
//             mySqlHandle.layoutStyle2(resultSet);  
         }
    	
    	mySqlHandle.deconnSQL();
    }
    
  //在数据库表里插入两组数据
    public void insert(String TableName,String item1,String data1,String item2,String data2) { 
    	MySqlHandle mySqlHandle = new MySqlHandle();
    	mySqlHandle.connSQL();
    	
//    	String selectSQL ="select * from SensorData";
		String insertSQL = "insert into "+ TableName +" (" +item1+","+item2+",time"    +") "+" values(" +data1+","+data2+",now()" +")"   +";";
    	
    	//增加
 	   if (mySqlHandle.insertSQL(insertSQL) == true) {  
             System.out.println("insert "+TableName+"数据表"+ " successfully");  
//             ResultSet resultSet = mySqlHandle.selectSQL(selectSQL);  
//             mySqlHandle.layoutStyle2(resultSet);  
         }
    	
    	mySqlHandle.deconnSQL();
    }
	
}
