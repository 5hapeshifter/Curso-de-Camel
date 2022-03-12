package com.brq.camel.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Builder
@Data
@AllArgsConstructor
@NoArgsConstructor
public class MetaGoRestModel {

		PaginationMetaGoRestModel pagination;
	
		@Data
		@AllArgsConstructor
		@NoArgsConstructor
		public class PaginationMetaGoRestModel {
			
			private int total;
			private int pages;
			private int page;
			private int limit;
			LinksPaginationMetaGoRestModel links;
			
			@Data
			@AllArgsConstructor
			@NoArgsConstructor
			public class LinksPaginationMetaGoRestModel{
				
				private String previous;
				private String current;
				private String next;
			}
		}
	
}
