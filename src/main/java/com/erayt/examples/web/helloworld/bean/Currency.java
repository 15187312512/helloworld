package com.erayt.examples.web.helloworld.bean;

import java.io.Serializable;
import java.sql.Date;

public class Currency implements Serializable{
	
		
		public static final String STATUS_VALID = "0";
		/**
		 * 描述:货币状态-非正常状态1
		 */
		public static final String STATUS_NOVALID = "1";
		/**
		 * 描述:货币数字代码
		 */
		private String cyCode;
		/**
		 * 描述:货币英文名
		 */
		private String engName;
		/**
		 * 描述:货币中文名称
		 */
		private String chsName;
		/**
		 * 描述:利率标价单位 暂时无用
		 */
		private Integer libUnit;
		/**
		 * 描述:利率有效位数 暂时无用
		 */
		private Integer libAvalible;
		/**
		 * 描述:贷币对应金额有效位数
		 */
		private Integer amtAvalible;
		/**
		 * 描述:计息基础 0-ACT/360 1-ACT/365
		 */
		private Integer libBase;	
		/**
		 * 描述:贷币报价类型:0=直接报价，1=间接报价
		 */

		private Integer isMul;
		/**
		 * 描述:种类:是否包含人行中间价，暂时无用
		 */

		private Integer cyType;
		/**
		 * 节假日参数
		 */
		private String holidayParam;
		/**
		 * 描述:货币状态(0-正常 1-停用) 默认正常
		 */
		private String status;
		
		private Date test1;
		
		private Date test2;
		
		private Float test3;
		
		private Integer test4;

		public String getCyCode() {
			return cyCode;
		}

		public void setCyCode(String cyCode) {
			this.cyCode = cyCode;
		}

		public String getEngName() {
			return engName;
		}

		public void setEngName(String engName) {
			this.engName = engName;
		}

		public String getChsName() {
			return chsName;
		}

		public void setChsName(String chsName) {
			this.chsName = chsName;
		}

		public Integer getLibUnit() {
			return libUnit;
		}

		public void setLibUnit(Integer libUnit) {
			this.libUnit = libUnit;
		}

		public Integer getLibAvalible() {
			return libAvalible;
		}

		public void setLibAvalible(Integer libAvalible) {
			this.libAvalible = libAvalible;
		}

		public Integer getAmtAvalible() {
			return amtAvalible;
		}

		public void setAmtAvalible(Integer amtAvalible) {
			this.amtAvalible = amtAvalible;
		}

		public Integer getLibBase() {
			return libBase;
		}

		public void setLibBase(Integer libBase) {
			this.libBase = libBase;
		}

		public Integer getIsMul() {
			return isMul;
		}

		public void setIsMul(Integer isMul) {
			this.isMul = isMul;
		}

		public Integer getCyType() {
			return cyType;
		}

		public void setCyType(Integer cyType) {
			this.cyType = cyType;
		}

		public String getHolidayParam() {
			return holidayParam;
		}

		public void setHolidayParam(String holidayParam) {
			this.holidayParam = holidayParam;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public Date getTest1() {
			return test1;
		}

		public void setTest1(Date test1) {
			this.test1 = test1;
		}

		public Date getTest2() {
			return test2;
		}

		public void setTest2(Date test2) {
			this.test2 = test2;
		}

		public Float getTest3() {
			return test3;
		}

		public void setTest3(Float test3) {
			this.test3 = test3;
		}

		public Integer getTest4() {
			return test4;
		}

		public void setTest4(Integer test4) {
			this.test4 = test4;
		}

		@Override
		public String toString() {
			return "Currency [cyCode=" + cyCode + ", engName=" + engName + ", chsName=" + chsName + ", libUnit="
					+ libUnit + ", libAvalible=" + libAvalible + ", amtAvalible=" + amtAvalible + ", libBase=" + libBase
					+ ", isMul=" + isMul + ", cyType=" + cyType + ", holidayParam=" + holidayParam + ", status="
					+ status + ", test1=" + test1 + ", test2=" + test2 + ", test3=" + test3 + ", test4=" + test4 + "]";
		}
		
		
}
