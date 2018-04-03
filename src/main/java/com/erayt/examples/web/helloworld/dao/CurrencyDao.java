package com.erayt.examples.web.helloworld.dao;

import java.util.Map;

import com.erayt.examples.web.helloworld.bean.Currency;

public interface CurrencyDao {
	//查询货币
	Currency selectCurrency(String cyCode);
	
	//增加 货币
	void insertCurrency(Currency currency);
	
	//修改货币
	void updateCurrency(Map<String, Object> params);
	
	//删除货币
	void deleteCurrency(String[] cyCode);
	
	
}
