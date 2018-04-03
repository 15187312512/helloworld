package com.erayt.examples.web.helloworld.service;

import com.erayt.examples.web.helloworld.bean.Currency;

public interface CurrencyService {
	//查询货币
	Currency findcCurrency(String id);
	
	//增加货币
	void addCurrency(Currency currency);
	
	//修改货币
	void updateCurrency(Currency currency,String cyCode);
	
	//删除货币
	void deleteCurrency(String[] cyCode);
}
